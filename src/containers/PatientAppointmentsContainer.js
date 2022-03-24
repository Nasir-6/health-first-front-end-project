import React from 'react'
import PatientAppointment from '../components/PatientAppointment'

function PatientAppointmentsContainer({patientAppointmentsList}) {

    const allAppointments = patientAppointmentsList.map((oneAppointment) => {

        return <PatientAppointment key={oneAppointment.appointmentId} id={oneAppointment.appointmentId}
        onePatientAppointment={oneAppointment}
       />    
      }
      )
  return (
    <section className='doctor-appointments-container'>
    <h2 className="doctor-appointments-title">Appointments:</h2> 
   {allAppointments}
  </section >
  )
}

export default PatientAppointmentsContainer