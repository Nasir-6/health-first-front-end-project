import React from 'react'
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

const DoctorAppointment = ({id , oneDoctorAppointment, handleDeleteAppointment}) => {
  return (
    <article className='doctor-Appointment'>
      <div className='delete-btn-position'><DeleteButton id = {id} deleteButtonClick={handleDeleteAppointment}/></div>
        <p>Patient: {oneDoctorAppointment.patientName}</p>
        <p>Room: {oneDoctorAppointment.roomName}</p>
        <p>Date: {oneDoctorAppointment.appointmentDate}</p>
        <p>Time: {oneDoctorAppointment.appointmentTime}</p>
        <div className='update-btn-position'> <UpdateButton/> </div>
        
    </article>
  )
}

export default DoctorAppointment;

