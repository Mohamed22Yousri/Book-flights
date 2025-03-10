import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import BookingTrips from "./BookingTrips/BookingTrips";
import TripListings from "./TripListings/TripListings";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <BookingTrips />,
        },
        {
          path: "Booking",
          element: <BookingTrips />,
        },
        {
          path: "Lists",
          element: <TripListings />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
