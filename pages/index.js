import EventList from "../components/Events/EventList";
import { getFeaturedEvents } from "../Utils/apiHandler";


export default function Home({featuredEvents}) {

  return (
    <div >
      <EventList items={featuredEvents}/>
    </div>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return {
    props : {
      featuredEvents
    }
  }
}
