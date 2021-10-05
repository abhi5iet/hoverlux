import { useContext, useRef } from 'react';
import NotificationContext from '../../store/notificationContext';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailRef = useRef();
  const notifCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    const emailVal = emailRef.current.value;

    notifCtx.showNotification({
      title: 'Signing Up...',
      message: 'Registering for newsletter',
      status: 'pending',
    })

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: emailVal }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if(res.ok){
        return res.json();
      }
      return res.json().then(data => {
        throw new Error(data.message || 'Something Went Wrong !');
      })
    }).then(data => {
      notifCtx.showNotification({
        title: 'Success !',
        message: 'Successfully registered for newsletter',
        status: 'success',
      })
    }).catch(err => {
      notifCtx.showNotification({
        title: 'Error !',
        message: err.message || 'Something went wrong !',
        status: 'error',
      })
    })
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;