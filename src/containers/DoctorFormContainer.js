import React from 'react'
import DoctorAppointmentForm from '../components/DoctorAppointmentForm'

function DoctorFormContainer({patientList}) {
  return (
    <>
    <h1> This is the form container </h1>
    <DoctorAppointmentForm patientList={patientList}/>
    
    </>
  )
}

export default DoctorFormContainer