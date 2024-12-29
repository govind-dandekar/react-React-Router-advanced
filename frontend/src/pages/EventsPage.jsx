import { Link } from 'react-router-dom'

const DUMMY_EVENTS = 
[
	{
		"id": "e1",
		"title": "event #1",
		"date": "2023-02-22",
		"image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
		"description": "Join this amazing event and connect with fellow developers."
	},
	{
		"id": "e2",
		"title": "event #2",
		"date": "2024-03-23",
		"image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
		"description": "Join this amazing event and connect with fellow developers."
	},
	{
		"id": "e3",
		"title": "event #3",
		"date": "2025-04-24",
		"image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
		"description": "Join this amazing event and connect with fellow developers."
	},
]

function EventsPage(){
	return (<>
		<h1>Events Page</h1>
		<ul>
		  {DUMMY_EVENTS.map((eventItem) => {
				return <li key={eventItem.id}>
					<Link to={eventItem.id}>
						{eventItem.title}
					</Link>
				</li>
			})}
		</ul>
	</>
	)
}

export default EventsPage;