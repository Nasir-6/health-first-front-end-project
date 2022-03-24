import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import DoctorAppointmentsContainer from '../containers/DoctorAppointmentsContainer';
import DoctorFormContainer from '../containers/DoctorFormContainer';

const DoctorPage = ({currentDoctor}) => {
    
    const [patientList, setPatientList] = useState([]);

    const [isCorrectUser, setIsCorrectUser] = useState(false);

    // once mounted get isCorrectFlag from sessionStorage and set it!! (convert and check if boolean)
    useEffect(() => {
        const isCorrectUserFlagInSessionStorage = Boolean(sessionStorage.getItem("isCorrectUser"))
        if(typeof isCorrectUserFlagInSessionStorage == Boolean){
            setIsCorrectUser(isCorrectUserFlagInSessionStorage)
        }
    }, [])
    // use localStorage to persist state!!
    // Store currentIndex when it changes
    useEffect(() => {
        sessionStorage.setItem('isCorrectUser', isCorrectUser);
      }, [isCorrectUser]);



    const [doctorAppointmentsList, setDoctorAppointmentsList] = useState([]);

    // const {doctorName} = useParams()
    const { doctorId } = useParams();
    const [isUpdated, setIsUpdated] = useState(false);
    const getDoctorAppointmentsUrl =
      "http://localhost:8080/appointments/doctorId/" + doctorId;

    useEffect(() => {
      fetch("http://localhost:8080/patients")
        .then((response) => response.json())
        .then((data) => setPatientList(data))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
      console.log(doctorId);
      console.log(currentDoctor);
      if (currentDoctor === null) {
        setIsCorrectUser(false);
      } else if (doctorId == currentDoctor.id) {
        setIsCorrectUser(true);
      } else if (doctorId != currentDoctor.id) {
        setIsCorrectUser(false);
      }
    }, [doctorId, currentDoctor]);
    // Had to run above useEffect when currentDoctor changes so update rendering!!!
  
  

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

  

  return (
    <>
    {isCorrectUser ? 
    <> 
    <h2 id="doctor-welcome">Hi Dr {doctorId}</h2> 
    <DoctorAppointmentsContainer doctorAppointmentsList={doctorAppointmentsList}
    handleDeleteAppointment={deleteAppointment} 
    updateAppointment={updateAppointment}/>
    <DoctorFormContainer patientList = {patientList}/> 
    </>
    :<h2> Incorrect user- Please login again </h2>}
</>
  )
}

export default DoctorPage;
