import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import DoctorAppointmentsContainer from '../containers/DoctorAppointmentsContainer';

const DoctorPage = () => {


  const [doctorAppointmentsList, setDoctorAppointmentsList] = useState([]);
//   const {doctorName} = useParams()
  const {doctorId} = useParams()
  const[isUpdated, setIsUpdated] = useState(false)
  const getDoctorAppointmentsUrl = "http://localhost:8080/appointments/doctorId/" + doctorId;
  const [allPatients, setAllPatients]= useState([])

//get all the patients 
  useEffect( () =>
  fetch("http://localhost:8080/patients")
  .then(response => response.json())
  .then(data => setAllPatients(data))
  .catch(error => console.log(error)), []);


  // See if can replace replace function in useEffect with getAppointmentsList
  useEffect( () =>
  fetch(getDoctorAppointmentsUrl)
  .then(response => response.json())
  .then(data => setDoctorAppointmentsList(data))
  .catch(error => console.log(error)), [isUpdated]);
  
  const getAppointmentsList = () => {
    fetch(getDoctorAppointmentsUrl)
      .then(response => response.json())
      .then(data => setDoctorAppointmentsList(data))
      .catch(error => console.log(error));
  }

  const deleteAppointment = async (e) => {
    console.log(e.currentTarget.id)
    const appointmentId = e.currentTarget.id
    
    console.log(appointmentId);
    const deleteAppointmentUrl = "http://localhost:8080/appointments/" + appointmentId;
    await fetch(deleteAppointmentUrl ,
      {
        method:'DELETE'
      })

    getAppointmentsList();

  }

  const updateAppointment = async (x,id) => {
    console.log(x)
    console.log(id);
    const updateAppointmentUrl = "http://localhost:8080/appointments/" + id;
    console.log(updateAppointmentUrl)

    fetch(updateAppointmentUrl,
      {
        method:'PUT',
        headers:{
          'Content-type':'application/json'
      },
      body: JSON.stringify(x)
      })
    console.log("updating done")
      // .then(res=> res.json())
      //   .then(data=> setDoctorAppointmentsList([...doctorAppointmentsList,data]))
      //   .catch(error => console.log(error))


    // getAppointmentsList();

  }

  
// Change Id back to Name once sorted
  return (
    <div className="doctor-page-container">
    <h2 className="doctor-welcome">Welcome Back Dr {doctorId}</h2> 
    <DoctorAppointmentsContainer doctorAppointmentsList={doctorAppointmentsList}
    handleDeleteAppointment={deleteAppointment} 
    updateAppointment={updateAppointment}/>
    </div>
  )
}

export default DoctorPage;
