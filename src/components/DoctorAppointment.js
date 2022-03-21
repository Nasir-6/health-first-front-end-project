import React from 'react'
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

const DoctorAppointment = ({oneDoctorAppointment}) => {
  return (
    <article className='doctor-Appointment'>
      <a className='delete-btn-position'><DeleteButton/></a>
        <p>Patient: {oneDoctorAppointment.patientName}</p>
        <p>Room: {oneDoctorAppointment.roomName}</p>
        <p>Date: {oneDoctorAppointment.appointmentDate}</p>
        <p>Time: {oneDoctorAppointment.appointmentTime}</p>
        <a className='update-btn-position'> <UpdateButton/> </a>
        
    </article>
  )
}

export default DoctorAppointment;

