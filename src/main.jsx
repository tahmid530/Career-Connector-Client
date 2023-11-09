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
import Login from './Login';
import Register from './Register';
import AuthProvider from './components/AuthProvider';
import Blog from './components/Blog';
import MyJobs from './components/MyJobs';
import UpdateForm from './components/UpdateForm';
import Details from './components/Details';
import Apply from './components/Apply';
import About from './components/Home/About';
import PrivateRoute from './components/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/add_job",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/all_jobs",
        element: <PrivateRoute><AllJobs></AllJobs></PrivateRoute>,
        loader: () => fetch('https://assignment-11-server-fem6qw98y-tahmid530.vercel.app/jobs')
      },
      {
        path: "/my_jobs",
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
        loader: () => fetch('https://assignment-11-server-fem6qw98y-tahmid530.vercel.app/my_jobs')
      },
      {
        path: "/my_jobs/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({ params }) => fetch(`https://assignment-11-server-fem6qw98y-tahmid530.vercel.app/my_jobs/${params.id}`)
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-fem6qw98y-tahmid530.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/apply",
        element: <Apply></Apply>,
        loader: () => fetch('https://assignment-11-server-fem6qw98y-tahmid530.vercel.app/jobs')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
