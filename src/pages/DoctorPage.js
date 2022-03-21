import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import DoctorAppointmentsContainer from '../containers/DoctorAppointmentsContainer';

const DoctorPage = () => {


  const [doctorAppointmentsList, setDoctorAppointmentsList] = useState([]);
  const {doctorName} = useParams()
  const doctorAppointmentsUrl = "http://localhost:8080/appointments/doctor/" + doctorName;

  
  useEffect( () =>
    fetch(doctorAppointmentsUrl)
    .then(response => response.json())
    .then(data => setDoctorAppointmentsList(data))
    .catch(error => console.log(error)), []);

  return (
    <>
    <h2>Hi Dr {doctorName}</h2>
    <DoctorAppointmentsContainer doctorAppointmentsList={doctorAppointmentsList}/>
    </>
  )
}

export default DoctorPage;
