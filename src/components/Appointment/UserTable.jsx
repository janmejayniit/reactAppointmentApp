import React from 'react'
import { Link } from 'react-router-dom';

function UserTable(props) {
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
                    <td>{appointment.is_approved?<i className='bi bi-check-circle'></i>:<i className='bi bi-circle'></i>}</td>
                    <td></td>
                    <td></td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default UserTable