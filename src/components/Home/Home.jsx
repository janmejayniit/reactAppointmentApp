import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const [user, setUser]= useState([]);

    const fetchDocotrsList = async  () => {
        const URL='http://127.0.0.1:5000/api/v1/list/doctors'
        try{
            const response = await axios.get(URL)
            setUser(response.data.records);    
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDocotrsList();
    }, []);

  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        
        {

            user.length>0 ? user.map((record, index)=>(
 
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={'/profile_images/'+record.profile_pic} style={{width:'100%'}}/>
                        </div>
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
