// Challenge / Exercise

// 1. DONE- Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. DONE - Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. DONE - Add a root layout that adds the <MainNavigation> component above all page components
// 4. DONE - Add properly working links to the MainNavigation
// 5. DONE - Ensure that the links in MainNavigation receive an "active" class when active
// 6. DONE - Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. DONE - Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom"

import HomePage from "./pages/HomePage";
import EventsPage, {loader as eventsLoader} from "./pages/EventsPage";
import EventDetailPage, {loader as eventDetailLoader} from "./pages/EventDetailPage";
import NewEventPage, {action as newEventAction} from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage/>},
      {path: 'events', element: <EventsRootLayout />, children: [
        {
          index: true, 
          element: <EventsPage/>, 
          loader: eventsLoader
        },
        {
          path: ':id',
          id: 'event-detail',
          loader: eventDetailLoader,
          children: [
            {
              index: true, 
              element: <EventDetailPage />,
            },
            {
              path: 'edit',
              element: <EditEventPage />
            }
          ]
        },
        {
          path: 'new', 
          element: <NewEventPage />,
          action: newEventAction
        },
    ]}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
