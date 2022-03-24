import React from 'react';
import DoctorAppointment from '../components/DoctorAppointment';

const DoctorAppointmentsContainer = ({doctorAppointmentsList, handleDeleteAppointment, updateAppointment}) => {

  // Map to return all appointmenst in the list
  const allAppointments = doctorAppointmentsList.map((oneAppointment,index) => {

    return <DoctorAppointment key={oneAppointment.appointmentId} id={oneAppointment.appointmentId}
    oneDoctorAppointment={oneAppointment}
    handleDeleteAppointment={handleDeleteAppointment}
    updateAppointment={updateAppointment}/>    
  }
  )

  return (
    <section className='doctor-appointments-container'>
      <h2 className="doctor-appointments-title">Appointments:</h2> 
     {allAppointments}
    </section >
  )
}

export default DoctorAppointmentsContainer;