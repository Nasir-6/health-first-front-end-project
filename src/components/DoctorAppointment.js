import React from 'react'

const DoctorAppointment = ({oneDoctorAppointment}) => {
  return (
    <article>
        <p>Patient: {oneDoctorAppointment.patientName}</p>
        <p>Room: {oneDoctorAppointment.roomName}</p>
        <p>Date: {oneDoctorAppointment.appointmentDate}</p>
        <p>Time: {oneDoctorAppointment.appointmentTime}</p>
    </article>
  )
}

export default DoctorAppointment;

