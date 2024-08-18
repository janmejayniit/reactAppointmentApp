import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function UserTable(props) {

    const [feedbackform, setFeedbackForm] = useState({'star_rating':'', 'feedback':'', 'sid':null});

    const markCompleteAppointment = (e)=>{
        
        const sid = e.target.getAttribute('data-sid');
        const URL= `http://127.0.0.1:5000/api/v1/appointment/mark/complete/${sid}`
         
        if(e.target.checked){
            try{
                const response = axios.get(URL)
                e.target.setAttribute('disabled','disabled')
            }catch(error){
                console.log(error)
            }
        }
    }

    const showPopup = (sid) =>{
        console.log(sid);
        setFeedbackForm((prev)=>({...prev, sid:sid}));
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
        myModal.show()
    }

    const handleFeedback = async (e) =>{
        e.preventDefault();
        const URL = 'http://127.0.0.1:5000/api/v1/appointment/feedback/submit'
        try{
           const response = await axios.post(URL, feedbackform); 
           if(response.status=='201'){
            const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
            myModal.hide();
            toast(response.data.message);

            setFeedbackForm({'star_rating':'', 'feedback':''});
           }

        //    console.log(response);
        }catch(err){
            console.log(err)
        }
        

    }


  return (
    <div>
        <ToastContainer />
        <table className='table'>
            <thead>
                <tr className='table-dark'>
                    <th>S.N</th>
                    <th>Appointment To</th>
                    <th>Symptoms</th>
                    <th>DateTime</th>
                    <th>Approved</th>
                    <th>Mark Complete</th>
                    <th>Feedback</th>
                </tr>
            </thead>
            <tbody>
                {props.appointmentList && props.appointmentList.map((appointment, index) => (
                <tr>
                    <td>{index+1}</td>
                    <td><Link className="nav-link"  to={'profile/'+appointment.appointment_user_id}>{appointment.appointment_to}</Link></td>
                    <td>{appointment.symptoms}</td>
                    <td>{appointment.date} {appointment.time}</td>
                    <td align='center'>{appointment.is_approved?<i className='bi bi-check-circle'></i>:<i className='bi bi-circle'></i>}</td>
                    <td align='center'>
                        {
                            appointment.is_approved?
                            <div class="form-check form-switch">
                                <input class="form-check-input" 
                                type="checkbox" 
                                role="switch" 
                                id={'flexSwitchCheckChecked-'+index} 
                                data-sid={appointment.id} 
                                onChange={markCompleteAppointment}
                                disabled={appointment.is_completed?'disabled':''}
                                checked={appointment.is_completed ? 'checked' : ''}
                                />
                                <label class="form-check-label" for="flexSwitchCheckChecked">&nbsp;</label>
                            </div>:null
                        }
                    </td>
                    <td align='center'>
                        {appointment.is_completed? !appointment.feedback?<button className='btn btn-dark btn-sm' onClick={()=>showPopup(appointment.id)}>click</button>:<i className='bi bi-check-circle'></i>:null }
                    </td>
                </tr>
                ))}
            </tbody>
        </table>


        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Give your valuable feedback</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleFeedback}>
                        <div className='mb-3'>
                            <label className='form-label'>Give overall star rating (1-5) </label>
                            <input type='number' start="1" 
                            step="1" 
                            min="1" 
                            max="5" 
                            className='form-control' 
                            value={feedbackform.star_rating}
                            onChange={(e)=>setFeedbackForm(prev=>({...prev, star_rating:e.target.value}))}/>
                            
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Write your feedback</label>
                            <textarea className='form-control' 
                            rows="3"
                            value={feedbackform.feedback}
                            onChange={(e)=>setFeedbackForm(prev=>({...prev, feedback:e.target.value}))}
                            ></textarea>
                        </div>
                        <button type='submit' className='btn btn-dark'>Save</button>
                    </form>
                    
                </div>
                
                </div>
            </div>
        </div>        


    </div>
  )
}
export default UserTable