import React from 'react'

function DoctorTable(props) {

  return (
    <div>
        <table className='table'>
            <thead>
                <tr className='table-dark'>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Symptoms</th>
                    <th>DateTime</th>
                    <th>Approved</th>
                </tr>
            </thead>
            <tbody>
                {props.appointmentList && props.appointmentList.map((appointment, index) => (
                <tr>
                    <td>{index+1}</td>
                    <td>{appointment.name}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.mobile}</td>
                    <td>{appointment.symptoms}</td>
                    <td>{appointment.date} {appointment.time} </td>
                    <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            {
                                appointment.is_approved?
                                <button className='btn btn-success btn-sm'><i className='bi bi-check-circle'></i></button>:appointment.status==='Cancel'?<button className='btn btn-dark btn-sm'><i className='bi bi-ban'></i></button>:
                                (
                                    <>
                                        <button className='btn btn-primary btn-sm' key={index} onClick={() => props.approveAppointment(appointment.id)}><i className='bi bi-check-circle'></i></button>
                                        <button className='btn btn-danger btn-sm' key={index} onClick={()=> props.banAppointment(appointment.id)}><i className="bi bi-ban"></i></button>
                                    </>
                                )    
                            }    
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DoctorTable
