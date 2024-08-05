import axios from 'axios';
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

function UpdatePassword() {

    const [password, setPassword] = useState({'oldPassword':'','newPassword':'','confirmPassword':''})

    const updatePassword = async (e) =>{
        e.preventDefault()
        const user_id = localStorage.getItem('user_id');
        const url = `http://127.0.0.1:5000/api/v1/user/${user_id}/update/password`

        try{
            const response = await axios.post(url, password)
            toast(response.data.message);
        }
        catch(error){
            toast(response.data.message);
        }
    }
    return (
        <div>
            <div className="row">
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <div className='card'>
                        <ToastContainer />
                        
                        <div className='card-body'>
                            <form onSubmit={updatePassword}>
                                <div className="mb-3">
                                    <label className='form-lable'>Old Password</label>
                                    <input type="password" className='form-control' 
                                    value={password.oldPassword}
                                    onChange={(e)=>setPassword(prev=>({...prev, oldPassword:e.target.value}))}/>
                                </div>
                                <div className="mb-3">
                                    <label className='form-lable'>New Password</label>
                                    <input type="password" className='form-control'
                                    value={password.newPassword} 
                                    onChange={(e)=>setPassword((prev)=>({...prev, newPassword:e.target.value}))}
                                    
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-lable'>Confirm Password</label>
                                    <input type="password" className='form-control'
                                    value={password.confirmPassword}
                                    onChange={(e)=>setPassword((prev)=>({...prev, confirmPassword:e.target.value}))}
                                    />
                                </div>
                                <button type='submit' className='btn btn-dark btn-sm'>Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default UpdatePassword
