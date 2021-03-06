import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react'
import EventList from '../../components/Events/EventList';
import EventSearch from '../../components/Events/EventSearch';
import { getAllEvents } from '../../Utils/apiHandler';
import Head from 'next/head';

const Events = ({ events }) => {
    const routerr = useRouter();
    const findEvents = (year, month) => {
        routerr.push(`/events/${year}/${month}`);
    }

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta name="description" content="Keep a track of awesome future events" />
            </Head>
            <EventSearch onSearch={findEvents} />
            <EventList items={events} />
        </Fragment>
    )
}

export default Events

export async function getStaticProps() {
    const events = await getAllEvents();
    return {
        props: {
            events
        },
        revalidate: 60
    }
}