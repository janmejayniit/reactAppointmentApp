import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Register() {

    const [user, setUser] = useState({
        first_name:'',
        last_name:'',
        email:'',
        mobile:'',
        password:''    
    })


    const registerNewUser = async (event) =>{
        event.preventDefault();
        try{
            const url = 'http://127.0.0.1:5000/api/v1/auth/register'
            const response = await axios.post(url,user)
            setUser({
                first_name:'',
                last_name:'',
                email:'',
                mobile:'',
                password:''    
            })
            toast('User has registered successfully');
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className='container-fluid mt-2'>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h5>Register New User</h5>
                    </div>
                    <div className='card-body'>
                        <ToastContainer />
                        <form onSubmit={registerNewUser}>
                            <div class="mb-3">
                                <div className='row'>
                                    <div className='col'>
                                        <label for="" class="form-label">First Name</label>
                                        <input type="text" class="form-control" value={user.first_name} onChange={(e)=>setUser(prev=>({...prev, first_name:e.target.value}))}/>  
                                    </div>
                                    <div className='col'>
                                        <label for="" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" value={user.last_name} onChange={(e)=>setUser(prev=>({...prev,last_name:e.target.value}))}/>  
                                    </div>
                                </div>       
                            </div>

                            <div class="mb-3">          
                                <label for="" class="form-label">Email</label>
                                <input type="email" class="form-control" value={user.email} onChange={(e)=>setUser(prev=>({...prev, email:e.target.value}))}/>           
                            </div>

                            <div class="mb-3">          
                                <label for="" class="form-label">Mobile</label>
                                <input type="text" class="form-control" value={user.mobile} onChange={(e)=>setUser(prev=>({...prev, mobile:e.target.value}))}/>           
                            </div>

                            <div class="mb-3">          
                                <label for="" class="form-label">Password</label>
                                <input type="password" class="form-control" value={user.password} onChange={(e)=>setUser(prev=>({...prev, password:e.target.value}))}/>           
                            </div>
                            <button type='submit' className='btn btn-dark btn-sm'>Register</button>
                        </form>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
