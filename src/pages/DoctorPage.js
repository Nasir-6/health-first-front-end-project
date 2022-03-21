import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const DoctorPage = () => {


  const [doctorAppointmentList, setDoctorAppointmentList] = useState([]);
  const {doctorName} = useParams()
  const doctorAppointmentsUrl = "http://localhost:8080/appointments/doctor/" + doctorName;
  // useEffect(f)

  return (
    <h2>Hi Dr {doctorName}</h2>
  )
}

export default DoctorPage;
