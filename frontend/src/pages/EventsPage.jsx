import { useLoaderData } from 'react-router-dom'

import EventsList from '../components/EventsList';



function EventsPage() {

	// react Router will get resolved data from Promise
	const events = useLoaderData();
  
  return (
			<EventsList events={events} />
  );
}

export async function loader(){
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		//...
	} else {
		const resData = await response.json();
		// will be made available in defined element: and other pages
		return resData.events
	}
}

export default EventsPage;