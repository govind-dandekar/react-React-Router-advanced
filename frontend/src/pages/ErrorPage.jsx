import { useRouteError } from 'react-router-dom'

import PageContent from "../components/PageContent";
import MainNavigation from '../components/MainNavigation';

function ErrorPage(){
	// if Response thrown, error.status available
	const error = useRouteError();
	
	let title = "An error occured";
	let message = "Something went wrong";

	if (error.status === 500){
		message = JSON.parse(error.data).message;
	}

	if (error.status === 404){
		title = 'Not found!'
		message = 'Could not find resource'
	}
	return(	
		<>
			<MainNavigation />
			<PageContent
				title={title}
			>
					<p>{message}</p>
			</PageContent>
		</>
	)
}

export default ErrorPage;