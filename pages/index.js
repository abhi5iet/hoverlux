import EventList from "../components/Events/EventList";
import { getFeaturedEvents } from "../Utils/apiHandler";
import Head from 'next/head';


export default function Home({featuredEvents}) {

  return (
    <div >
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="Keep a track of awesome future events" />
      </Head>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return {
    props : {
      featuredEvents
    },
    revalidate : 1000
  }
}
