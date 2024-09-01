import { Height } from '@mui/icons-material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const [user, setUser]= useState([])
    const [error, setError]= useState()

    const fetchDocotrsList = async  () => {
        const URL='http://127.0.0.1:5000/api/v1/list/doctors'
        try{
            const response = await axios.get(URL)
            setUser(response.data.records);    
        }catch(err){
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchDocotrsList();
    }, []);

  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        {error?<div className='col-md-12 text-danger text-center'><h4>{error}</h4></div>:null}
        
        {
            user.length>0 ? user.map((record, index)=>(
                <div className='col-md-3'>
                    
                    <div className='card'>
                        <div style={{backgroundColor:'black'}}>
                            <img src={'/profile_images/'+record.profile_pic} className="" style={{width:'100%', height:'220px', objectFit:'contain'}}/>
                        </div>
                        {record.ratings>0 && <span style={{position:'absolute'}}>{record.ratings}<i className='bi bi-star'></i></span>}
                        {/* <div className='card-body'>
                        </div> */}
                        <div className='card-footer'>
                            <div className='text float-start'>{record.first_name+' '+record.last_name}</div>
                            <div className='float-end'>
                                <Link to={'/profile/'+record.user_id} className='btn btn-dark btn-sm'>View</Link>
                            </div>
                        </div>
                    </div>    
                </div>    
            ))  :'No Records'
        }
      </div>
    </div>
  )
}

export default Home
