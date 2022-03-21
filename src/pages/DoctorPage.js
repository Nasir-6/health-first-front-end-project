import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import DoctorAppointmentsContainer from '../containers/DoctorAppointmentsContainer';

const DoctorPage = () => {


  const [doctorAppointmentsList, setDoctorAppointmentsList] = useState([]);
  const {doctorName} = useParams()
  const getDoctorAppointmentsUrl = "http://localhost:8080/appointments/doctor/" + doctorName;

  useEffect( () =>
  fetch(getDoctorAppointmentsUrl)
  .then(response => response.json())
  .then(data => setDoctorAppointmentsList(data))
  .catch(error => console.log(error)), []);
  
  const getAppointmentsList = () => {
    fetch(getDoctorAppointmentsUrl)
      .then(response => response.json())
      .then(data => setDoctorAppointmentsList(data))
      .catch(error => console.log(error));
  }

  const deleteAppointment = async (appointmentId) => {
    console.log(appointmentId);
    const deleteAppointmentUrl = "http://localhost:8080/appointments/" + appointmentId;
    await fetch(deleteAppointmentUrl ,
      {
        method:'DELETE'
      })

    getAppointmentsList();

  }

  return (
    <>
    <h2 id="doctor-welcome">Hi Dr {doctorName}</h2> 
    <DoctorAppointmentsContainer doctorAppointmentsList={doctorAppointmentsList}
    handleDeleteAppointment={deleteAppointment}/>
    </>
  )
}

export default DoctorPage;
