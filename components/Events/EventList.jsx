import EventItem from './EventItem';
import evListStyles from '../../styles/EventList.module.css';

const EventList = ({items}) => {
    return (
        <ul className={evListStyles.list}>
            {items.map(el => <EventItem key={el.id} {...el} />)}
        </ul>
    )
}

export default EventList
