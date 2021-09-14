import React from 'react'
import EventList from '../../components/Events/EventList';
import { getAllEvents } from '../../dummy-data'

const Events = () => {
    const events = getAllEvents();
    return (
        <div>
            <EventList items={events} />
        </div>
    )
}

export default Events

