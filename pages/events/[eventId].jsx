import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";
import { getEventById, getAllEvents } from "../../Utils/apiHandler";


const SingleEvent = ({ event }) => {
    if (!event) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p className="center">No Event Found !</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                {event.description}
            </EventContent>
        </Fragment>
    )
}

export default SingleEvent

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

    return {
        props: {
            event
        }
    }
}

export async function getStaticPaths(){
    const allEvents = await getAllEvents();
    const allPaths = allEvents.map(item => {params : {eventId : item.id}});
    return {
        paths: allPaths,
        fallback : false
    }
}