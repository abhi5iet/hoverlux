import EventList from "../components/Events/EventList";
import { getFeaturedEvents } from "../dummy-data"


export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div >
      <EventList items={featuredEvents}/>
    </div>
  )
}
