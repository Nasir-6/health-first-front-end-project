import React from 'react'
import {useState, useEffect} from 'react';

const DoctorPage = () => {
  const [doctorAppointmentList, setDoctorAppointmentList] = useState([]);
  const doctorName = "Darwin";
  const doctorAppointmentsUrl = "http://localhost:8080/appointments/doctor/" + doctorName;
  // useEffect(f)

  return (
    <h2>Hi Dr {doctorName}</h2>
  )
}

export default DoctorPage;
