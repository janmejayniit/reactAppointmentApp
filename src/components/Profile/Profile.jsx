import axios from 'axios'
import React from 'react'
import { useParams } from "react-router-dom"

function Profile() {
    let params = useParams()
    const showUserProfile = async (user_id) =>{
        try{
           const response = await axios.get(`http://127.0.0.1:5000/profile/${user_id}`)
           console.log(response);

        }catch(error){
            console.log(error)
        }
        
    }
  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        <div className='col-md-4'>
            <div className='card'>
                <img src="https://i.pravatar.cc/150?img=5" className="card-img-top" alt="..."/>
                <div className='card-body'></div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Full Name</li>
                    <li class="list-group-item">Email</li>
                    <li class="list-group-item">Mobile</li>
                </ul>
                
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
