import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {login as authLogin } from '../../store/authSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState({email:'', password:''})
    const[error, setError] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const doLogin = async (event)=>{
        event.preventDefault()
        const url='http://127.0.0.1:5000/api/v1/auth/login'
        
        try{
            const response = await axios.post(url, user)
            if(response){
                const userData = response.data.user;
                // console.log(userData)
                localStorage.setItem('first_name', userData.first_name)
                localStorage.setItem('last_name', userData.last_name)
                localStorage.setItem('email', userData.email)
                localStorage.setItem('user_id', userData.user_id)
                localStorage.setItem('user_role', userData.user_role)
                dispatch(authLogin(userData));
                setUser({email:'', password:''})
                // toast('Login is successful');
                navigate("/")
            }else{
                toast('Oops! Login Failed');
            }
        }catch(error){
            setError(error)
            console.log(error);    
        }    
    }
  return (
    <div className='contaianer-fluid mt-2'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div className='card'>
                    <div className='card-header'>
                        <h5><i className='bi bi-person'></i>Login</h5>
                    </div>
                    <div className='card-body'>
                        <ToastContainer />
                        <form onSubmit={doLogin}>
                            <div class="mb-3">          
                                <label for="" class="form-label">Email</label>
                                <input type="email" class="form-control" value={user.email} onChange={(e)=>setUser(prev=>({...prev, email:e.target.value}))}/>           
                            </div>
                            <div class="mb-3">          
                                <label for="" class="form-label">Password</label>
                                <input type="password" class="form-control" value={user.password} onChange={(e)=>setUser(prev=>({...prev, password:e.target.value}))}/>           
                            </div>
                            <button type='submit' className='btn btn-dark btn-sm'>Login</button>
                            
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </form> 
                    </div>    
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Login
