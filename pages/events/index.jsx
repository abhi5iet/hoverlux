import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react'
import EventList from '../../components/Events/EventList';
import EventSearch from '../../components/Events/EventSearch';
import { getAllEvents } from '../../dummy-data'

const Events = () => {
    const routerr = useRouter();
    const events = getAllEvents();
    const findEvents = (year, month) => {
        routerr.push(`/events/${year}/${month}`);
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEvents} />
            <EventList items={events} />
        </Fragment>
    )
}

export default Events

