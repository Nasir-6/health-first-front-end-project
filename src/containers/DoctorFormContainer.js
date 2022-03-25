import React from 'react'
import DoctorAppointmentForm from '../components/DoctorAppointmentForm'

function DoctorFormContainer({patientList, handleAppointmentSubmission}) {
  return (
    <>
    <div className='form-container'> 
    <h2 className='form-title'>Book a new appointment:</h2>
    <DoctorAppointmentForm patientList={patientList} handleAppointmentSubmission ={handleAppointmentSubmission}/>
     </div>
    </>
  )
}

export default DoctorFormContainer