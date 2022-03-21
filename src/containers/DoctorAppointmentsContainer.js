import React from 'react';

const DoctorAppointmentsContainer = ({doctorAppointmentsList}) => {
  

  return (
    <h2>
      {doctorAppointmentsList[0].name}
    </h2>
  )
}

export default DoctorAppointmentsContainer;