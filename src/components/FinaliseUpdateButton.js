import React, { useEffect, useState } from 'react'


const FinaliseUpdateButton= ({updateAppointment, id, date, time, patientId, showIsDisabled, showIsUpdating}) => {


  const [patientNhsId, setPatientNhsId]=useState(0)
  const [doctorId, setDoctorId] = useState(0)
  

 

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
     
      const appointmentId= event.currentTarget.id
      const url = "http://localhost:8080/appointments/"+ appointmentId;

     
      console.log(patientNhsId)
      console.log(doctorId)
      if(patientId!==patientNhsId&& patientId!==undefined){
        setPatientNhsId(patientId)
      }
      let updatedAppointment = {
        patientNhsId:parseInt(patientNhsId) ,
        doctorId: parseInt(doctorId),
          appointmentDate:date,
          appointmentTime: time
      }
      console.log(updatedAppointment)
      updateAppointment(updatedAppointment,appointmentId)
      showIsDisabled();
      showIsUpdating();
      
      
  }
  

  
  return (
    <button id = {id} onClick={handleFormSubmit}>Submit</button>
  )
}

export default FinaliseUpdateButton;