import AddNewAppointment from './components/Appointment/AddNewAppointment';
import AppointmentList from './components/Appointment/AppointmentList';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom'
import Layout from './components/Layouts/Layout';
import { useSelector } from 'react-redux'
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import 'react-toastify/dist/ReactToastify.css';
import UpdatePassword from './components/Profile/UpdatePassword';
import PrivateRoute from  './components/Auth/PrivateRoute.jsx'
import Home from './components/Home/Home'
import { useState , useEffect} from 'react';


function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route element={<PrivateRoute/>}>
            <Route path='/' element={<Home />} />
            <Route path='/appointments' element={<AppointmentList />} />
            <Route path='/appointment/create/:appointment_to' element={<AddNewAppointment/>}/>
            <Route excat path='/profile/:user_id' element={<Profile/>}/>
            <Route path='/profile/update/image' element={<UpdateProfile/>}/>
            <Route path='/profile/update/password' element={<UpdatePassword/>}/>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Route>

    )
  )

  return (
    <> 
      <RouterProvider router={router} />
    </>
  )
}

export default App
