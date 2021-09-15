import { useRouter } from "next/dist/client/router"
import EventList from "../../components/Events/EventList";
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
        return <h4 className="center">Invalid Filter. Please check the values again !</h4>
    }
    const filteredEvents = getFilteredEvents({
        year : year,
        month : month
    });

    if(!filteredEvents || filteredEvents.length === 0){
        return <h4 className="center" >No Events found for the chosen filter !</h4>
    }

    return (
        <div>
            <EventList items={filteredEvents}/>
        </div>
    )
}

export default FilteredEvent
