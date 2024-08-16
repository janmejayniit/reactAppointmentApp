import axios from 'axios'
import React, { useEffect, useState, useReducer } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function UpdateProfile() {

    const defaultImg = localStorage.getItem('profile_pic')
    const [image, setImage] =  useState(defaultImg)

    const uploadImage = async (event)=>{
        event.preventDefault();
        const user_id = localStorage.getItem('user_id');
        const url = `http://127.0.0.1:5000/api/v1/user/${user_id}/update/image`
        const formData = new FormData()
        formData.append('image', image);
        try{
            const response = await axios.post(url, formData);
            console.log(response.data.profile_pic)
            localStorage.setItem('profile_pic',response.data.profile_pic)
            setImage(response.data.profile_pic)
            toast('Image uploaded successfully');
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div className='container-fluid mt-2'>
        <div className="row">
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div className='card'>
                    <ToastContainer />
                    <img src={'/profile_images/'+image} className="card-img-top" alt="..."/>
                    <div className='card-body'>
                        <form onSubmit={uploadImage} className='row g-3 '>
                            <div className='col-12 col-md-10'>
                                {/* <label className='form-label'>Uploade Your Profile Image</label> */}
                                <input type='file' className='form-control' accept='image/*' onChange={(e)=>(setImage(e.target.files[0]))}/>
                            </div>
                            <div className='col-12 col-md-2'>
                                <button className='btn btn-dark btn-sm'><i className='bi bi-upload'></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default UpdateProfile
