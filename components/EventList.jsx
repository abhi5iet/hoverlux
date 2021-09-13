import React from 'react';
import EventItem from './EventItem';

const EventList = ({items}) => {
    return (
        <ul>
            {items.map(el => <EventItem key={el.id} {...el} />)}
        </ul>
    )
}

export default EventList
