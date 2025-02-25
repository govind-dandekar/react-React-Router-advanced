import { useRouteLoaderData } from "react-router-dom";

import EventItem from '../components/EventItem'

function EventDetailPage(){
	
	const data = useRouteLoaderData('event-detail');

	return (
		<EventItem 
			event={data.event}
		/>
	)
}

export default EventDetailPage;

// can access route params in loader fx
export async function loader({request, params}){
	const id = params.id;

	const response = await fetch('http://localhost:8080/events/' + id);

	if (!response.ok){
		throw new Response(JSON.stringify({ message: 'Could not fetch event data' }), {
      status: 500,
    });
	} else {
		return response;
	}
}