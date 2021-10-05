import { useContext, useEffect, useState } from 'react';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notificationContext';

function Comments(props) {
  const { eventId } = props;
  const notifCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      if(showComments){
        setIsLoading(true);
          fetch(`/api/comments/${eventId}`)
          .then(res => res.json())
          .then(data => {
            setComments(data.comments);
            setIsLoading(false);
          });
      }
  }, [eventId, showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {

    notifCtx.showNotification({
      title: 'Sending Comment...',
      message: 'Your comment is getting stored in database',
      status: 'pending',
    })

    fetch(`/api/comments/${eventId}`, {
        method : 'POST',
        body : JSON.stringify(commentData),
        headers : {
            'Content-Type' : 'application/json'
        }
    } ).then(res => {
      if(res.ok){
        return res.json();
      }
      return res.json().then(data => {
        throw new Error(data.message || 'Something Went Wrong !');
      })
    }).then(data => {
      notifCtx.showNotification({
        title: 'Success !',
        message: 'Your Comment Has Been Saved !',
        status: 'success',
      })
    }).catch(err => {
      notifCtx.showNotification({
        title: 'Error !',
        message: err.message || 'Something Went Wrong !',
        status: 'error',
      })  
    });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isLoading && <CommentList items={comments} />}
      {showComments && isLoading && <h5>Loading...</h5>}
    </section>
  );
}

export default Comments;