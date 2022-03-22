import React, { useEffect, useState } from 'react'


const FinaliseUpdateButton= ({updateAppointment, id, date, time}) => {

  // const [patientName, setPatientName] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  const [patientNhsId, setPatientNhsId]=useState(0)
  const [doctorId, setDoctorId] = useState(0)


  // const handleNameChange = (event) => {
  //     setPatientName(event.target.value)
  // }

  // const handleDateChange = (event) => {
  //     setDate(event.target.value)
  // }

  // const handleTimeChange = (event) => {
  //     setTime(event.target.value)
  // }

  async function fetchingNhsId(url){
    const response=await fetch(url); 
    const data = await response.json()
    const nhsId = data.patientNhsId
    setPatientNhsId(nhsId)
    // fetch().then(res => res.json()).then(data=> setPatientNhsId(data.patientNhsId))
  }

  const fetchingDoctorId= async (url) => {
    const response=await fetch(url); 
    const data = await response.json()
    const doctorId = data.doctorId
    setDoctorId(doctorId)

  }

  const url = "http://localhost:8080/appointments/"+ id;
  useEffect(()=>{
    fetchingNhsId(url)
    fetchingDoctorId(url)
    console.log(id)
  })




  const handleFormSubmit = async (event) => {
      event.preventDefault(); 
      // if(!patientName||!date||!time){
      //     alert("missing information");
      //     return; 
      // }
      const appointmentId= event.currentTarget.id
      const url = "http://localhost:8080/appointments/"+ appointmentId;

     
      console.log(patientNhsId)
      console.log(doctorId)
      let updatedAppointment = {
        patientNhsId:patientNhsId ,
        doctorId: doctorId,
          appointmentDate:date,
          appointmentTime: time
      }
      console.log(updatedAppointment)
      // updateAppointment("hello",appointmentId)
      
      // setName("")
      // setType("")
      // setAge("")
      // setBreed("")
      
  }
  

  
  return (
    <button id = {id} onClick={handleFormSubmit}>Submit</button>
  )
}

export default FinaliseUpdateButton;