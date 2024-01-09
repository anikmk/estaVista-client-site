import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivetRoute from './PrivetRoute'
import { getRoom } from '../Api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'
import HostPrivetRoute from './HostPrivetRoute'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import AdminPrivetRoute from './AdminPrivetRoute'
import Profile from '../pages/Dashboard/Common/Profile'
import MyBooking from '../pages/Dashboard/Guest/MyBooking'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/roomDetails/:id',
        element:<PrivetRoute><RoomDetails></RoomDetails></PrivetRoute>,
        // loader sob somoy small latter er hoy
        loader: ({params}) => getRoom(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },

  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[{
      path:'addRoom',
      element:<PrivetRoute> <HostPrivetRoute>
        <AddRoom></AddRoom>
        </HostPrivetRoute> </PrivetRoute>
    },
    {
      path:'myListings',
      element:<PrivetRoute><HostPrivetRoute><MyListings></MyListings></HostPrivetRoute></PrivetRoute>
    },
    {
      path:'manageUsers',
      element:<PrivetRoute><AdminPrivetRoute><ManageUsers></ManageUsers></AdminPrivetRoute></PrivetRoute>
    },
    {
      path:'profile',
      element:<PrivetRoute><Profile></Profile></PrivetRoute>
    },
    {
      path:'myBooking',
      element:<MyBooking></MyBooking>
    },
    {
      path:'manageBookings',
      element:<HostPrivetRoute><ManageBookings></ManageBookings></HostPrivetRoute>
    }
  ]
  },
])
