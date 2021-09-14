import { Fragment } from 'react'
import EventList from '../../components/Events/EventList';
import EventSearch from '../../components/Events/EventSearch';
import { getAllEvents } from '../../dummy-data'

const Events = () => {
    const events = getAllEvents();
    return (
        <Fragment>
            <EventSearch/>
            <EventList items={events} />
        </Fragment>
    )
}

export default Events

