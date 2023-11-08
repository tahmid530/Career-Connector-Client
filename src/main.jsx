import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/Home';
import AddJob from './components/AddJob';
import AllJobs from './components/AllJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/add_job",
        element: <AddJob></AddJob>
      },
      {
      path: "/all_jobs",
      element: <AllJobs></AllJobs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
