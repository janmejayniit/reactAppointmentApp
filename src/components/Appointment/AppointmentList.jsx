import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import DoctorTable from './DoctorTable';
import UserTable from './UserTable';

const AppointmentList = () => {

  const [appointmentList, setAppointmentList] = useState([]);
  const [error, setError] = useState(null);
//   const loggedInUser = useSelector((state)=>state.auth.userData)

  const loggedInUser = {
    first_name:localStorage.getItem('first_name'),
    last_name:localStorage.getItem('last_name'),
    user_role:localStorage.getItem('user_role'),
    user_id:localStorage.getItem('user_id')
  }

  const fetchAppointments = async () => {
        const user_id = loggedInUser.user_id
        const url = `http://127.0.0.1:5000/api/v1/list/appointment/${user_id}`;

        try {
            const response = await axios.get(url);
            setAppointmentList(response.data.records);
            console.log(response.data); // Optional: For debugging
        } catch (err) {
            console.error(err); // Log error to the console
            setError(err.message || 'An error occurred');
        }
    };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const approveAppointment = async (id) =>{
    const url = `http://127.0.0.1:5000/api/v1/appointment/approve/${id}`;
    try {
        const response = await axios.get(url);
        fetchAppointments();
    } catch (err) {
        setError(err.message || 'An error has occured');
    }
  }

  const banAppointment = async (id) =>{
    const url = `http://127.0.0.1:5000/api/v1/appointment/cancel/${id}`;
    try{
        const response = await axios.get(url)
        fetchAppointments();
    }catch(err){
        setError(err.message || 'An error has occured');
    }
  }

  return (
    <div className='container-fluid mt-2'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className='card-body'>
                        {error && <div className='text-center text-danger'><h3>{error}</h3></div>}
                        {
                            !error?
                            <div className='table-responsive'>
                                {
                                    loggedInUser.user_role==2?<DoctorTable appointmentList={appointmentList} events={{'appointmentList':appointmentList,'approveAppointment':approveAppointment}} approveAppointment={approveAppointment} banAppointment={banAppointment}/>:<UserTable appointmentList={appointmentList}/>
                                }
                            </div>:
                            null
                        }
                    </div>
                
                </div>
            </div>
        </div>  
    </div>
  );
};
export default AppointmentList;
