import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

function UserTable(props) {

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

  return (
    <div>
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
                                <input class="form-check-input" type="checkbox" role="switch" id={'flexSwitchCheckChecked-'+index} data-sid={appointment.id} onChange={markCompleteAppointment}/>
                                <label class="form-check-label" for="flexSwitchCheckChecked">&nbsp;</label>
                            </div>:null
                        }
                    </td>
                    <td>
                        {appointment.is_approved? <button className='btn btn-dark btn-sm'>click</button>:null }
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default UserTable