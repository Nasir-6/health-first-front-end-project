import React from 'react';
import DoctorAppointment from '../components/DoctorAppointment';

const DoctorAppointmentsContainer = ({doctorAppointmentsList, handleDeleteAppointment, updateAppointment}) => {

  // Map to return all appointmenst in the list
  const allAppointments = doctorAppointmentsList.map(oneAppointment => {

    return <DoctorAppointment key={oneAppointment.appointmentId} id={oneAppointment.appointmentId}
    oneDoctorAppointment={oneAppointment}
    handleDeleteAppointment={handleDeleteAppointment}
    updateAppointment={updateAppointment}/>    
  }
  )

  return (
    <section className='doctor-appointments-container'>
      <h2 id="doctor-appointments-title">Here is a list of your appointments:</h2> 
     {allAppointments}
    </section >
  )
}

export default DoctorAppointmentsContainer;