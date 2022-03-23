import React from 'react'
import DoctorAppointmentForm from '../components/DoctorAppointmentForm'

function DoctorFormContainer({patientList, handleAppointmentSubmission}) {
  return (
    <>
    <h1> This is the form container </h1>
    <DoctorAppointmentForm patientList={patientList} handleAppointmentSubmission ={handleAppointmentSubmission}/>
    
    </>
  )
}

export default DoctorFormContainer