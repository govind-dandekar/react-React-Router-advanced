import { useLoaderData } from 'react-router-dom'

import EventsList from '../components/EventsList';

function EventsPage() {
	// react Router will get resolved data from Promise
	const data = useLoaderData();
	const events = data.events;
  
	if (data.isError){
		return <p>{data.message}</p>
	}

  return (
			<EventsList events={events} />
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      status: 500,
    });
  } else {
    return response;
  }
}

export default EventsPage;