import React from 'react';
import DoctorAppointment from '../components/DoctorAppointment';

const DoctorAppointmentsContainer = ({doctorAppointmentsList}) => {

  // Map to return all appointmenst in the list
  const allAppointments = doctorAppointmentsList.map((oneAppointment, index) => {

    return <DoctorAppointment key={index} oneDoctorAppointment={oneAppointment}/>
    
  }
  )

  return (
    <section className='doctor-appointments-container'>
     {allAppointments}
    </section >
  )
}

export default DoctorAppointmentsContainer;