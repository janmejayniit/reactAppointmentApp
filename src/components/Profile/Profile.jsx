import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"

function Profile() {

    const [user, setUser] = useState()
    const {user_id} = useParams();

    const showUserProfile = async () =>{
        
        // console.log(user_id)
        try{
           const response = await axios.get(`http://127.0.0.1:5000/api/v1/profile/${user_id}`)
           setUser(response.data.record);
        //    console.log(response)

        }catch(error){
            console.log(error)
        }
        
    }
    useEffect(()=>{
        showUserProfile();
    },[])
  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        <div className='col-md-4'>
            <div className='card'>
                {
                    user?
                    <>
                        <div className=''>
                            <Link to={'/appointment/create/'+user.user_id} className="btn btn-dark btn-sm" style={{borderRadius:'0px',position:'absolute'}}>Book Appointment</Link>
                            <img src={'/profile_images/'+user.profile_pic} className="card-img-top" alt="..."/>
                        </div>
                        <div className='card-body'></div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Name: {user.first_name+' '+user.last_name}</li>
                            <li class="list-group-item">Email: {user.email}</li>
                            <li class="list-group-item">Mobile: {user.mobile}</li>
                        </ul> 
                         
                    </>:null
                }    
            </div>
        </div>
        <div className='col-md-2'>
            
        </div>
        <div className='col-md-6'>
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-3'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
