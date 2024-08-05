const BASEURL='http://127.0.0.1:5000/api/v1'

const API={
    'LoginURL':BASEURL+'/auth/login',
    'RegisterURL':BASEURL+'/auth/register',
    'UpdateProfileImageURL':BASEURL+`/user/${user_id}/update/image`,
    'UpdatePasswordURL':BASEURL+`/user/${user_id}/update/password`,
    'AppointmentURL':BASEURL+'/create/new/appointment',
    'FetchAppointmentURL':BASEURL+`/list/appointment/${user_id}`,
    'ApproveAppointmentURL':BASEURL+`/appointment/approve/${id}`,
    'CancelAppointmentURL':BASEURL+`/appointment/cancel/${id}`,
}

export default API