import React from 'react';

const DoctorAppointmentsContainer = ({doctorAppointmentsList}) => {
  

  return (
    <h2>
      {doctorAppointmentsList[0].doctorName}
    </h2>
  )
}

export default DoctorAppointmentsContainer;