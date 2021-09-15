import { useRouter } from "next/dist/client/router"
import { Fragment } from "react";
import EventList from "../../components/Events/EventList";
import ResultTitle from "../../components/Events/ResultTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEvent = () => {
    const router = useRouter();
    let myPath = router.query.eventSlug;

    if(!myPath){
        return <h4 className="center">...Loading</h4>
    }
    myPath = myPath.map(Number);
    const [year, month] = myPath;

    if(isNaN(year) || isNaN(month) || year < 2021 || year > 2030 || month < 1 || month > 12){
        return (
        <Fragment>
            <ErrorAlert>
                <p className="center">Invalid Filter. Please check the values again !</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
        )
    }
    const filteredEvents = getFilteredEvents({
        year : year,
        month : month
    });

    if(!filteredEvents || filteredEvents.length === 0){
        return (
            <Fragment>
                <ErrorAlert>
                    <p className="center" >No Events found for the chosen filter !</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
            );
    };

    const date = new Date(year, month-1)

    return (
        <Fragment>
            <ResultTitle date={date} />
            <EventList items={filteredEvents}/>
        </Fragment>
    )
}

export default FilteredEvent
