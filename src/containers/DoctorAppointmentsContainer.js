import React from 'react';
import DoctorAppointment from '../components/DoctorAppointment';

const DoctorAppointmentsContainer = ({doctorAppointmentsList}) => {
  const allAppointments = doctorAppointmentsList.map((oneAppointment, index) => {
    return <DoctorAppointment oneDoctorAppointment={oneAppointment}/>
  }
  )

  return (
    <>
     {allAppointments}
    </>
  )
}

export default DoctorAppointmentsContainer;