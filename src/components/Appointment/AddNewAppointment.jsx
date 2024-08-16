import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function AddNewAppointment() {

    const {appointment_to} = useParams()
    const loggedInUser = useSelector((state)=>state.auth.userData)
    // console.log(loggedInUser.user_id)

    const [user, setUser] = useState(
        {
            // name:'',
            // email:'',
            // mobile:'',
            symptoms:'',
            date:'',
            time:'',
            // user_id:loggedInUser.user_id
            user_id:localStorage.getItem('user_id'),
            appointment_to:appointment_to
        }
    )

    const  handleSubmit = async (e) =>{
        // setUser((prev)=>({...prev, user_id:loggedInUser.user_id}))
        e.preventDefault()         
        let url = 'http://127.0.0.1:5000/api/v1/create/new/appointment'
        try{
           
            // console.log(user)
            const response = await axios.post(url,user)
            toast(response.data.message);
            console.log(result)
        }
        catch(err){
            console.log(err)
            toast(response.data.message);
        }
        finally{
            // setUser({
            //     // name:'',
            //     // email:'',
            //     // mobile:'',
            //     symptoms:'',
            //     date:'',
            //     time:'',
            //     user_id:localStorage.getItem('user_id'),
            //     appointment_to:appointment_to
            // })
        }
    }

  return (
    <div className='container-fluid mt-2'>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-body'>
                        <ToastContainer />
                        <form onSubmit={handleSubmit}>
                            {/* <div class="mb-3">
                                <label for="" class="form-label">Your Name</label>
                                <input type="text" class="form-control" value={user.name} onChange={(e)=>setUser(prevUser => ({...prevUser,name: e.target.value}))}/>     
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Email</label>
                                <input type="email" class="form-control" value={user.email} onChange={(e)=>setUser(prevUser => ({...prevUser,email: e.target.value}))}/>     
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Mobile</label>
                                <input type="text" class="form-control" value={user.mobile} onChange={(e)=>setUser(prevUser => ({...prevUser,mobile: e.target.value}))}/>     
                            </div> */}

                            <div class="mb-3">
                                <label for="" class="form-label">Symptoms</label>
                                <textarea className='form-control' value={user.symptoms} onChange={(e)=>setUser(prevUser => ({...prevUser,symptoms: e.target.value}))}></textarea>
                            </div>
                            <div className='mb-3'>
                                <label>Choose Slot</label>
                                <div class="row">
                                    <div class="col">
                                        <input type='date' className='form-control' value={user.date} onChange={(e)=>setUser(prevUser => ({...prevUser,date: e.target.value}))}/>
                                    </div>
                                    <div class="col">
                                        <input type='time' className='form-control' value={user.time} onChange={(e)=>setUser(prevUser => ({...prevUser,time: e.target.value}))}/>
                                    </div>
                                </div>    
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddNewAppointment