import React, { useState,useEffect } from 'react'
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

const DoctorAppointment = ({id , oneDoctorAppointment, handleDeleteAppointment, updateAppointment}) => {

  const [isDisabled, setIsDisabled] = useState(true)
  
  const showIsDisabled = () => {
    if(isDisabled){
   setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  }

  // const [patientId, setPatientId] = useState(0)
  const [patientName, setPatientName] = useState(oneDoctorAppointment.patientName);
  const [date, setDate] = useState(oneDoctorAppointment.appointmentDate);
  const [time, setTime] = useState(oneDoctorAppointment.appointmentTime);

  const [allPatients, setAllPatients]= useState([])

//get all the patients 
  useEffect( () =>
  fetch("http://localhost:8080/patients")
  .then(response => response.json())
  .then(data => setAllPatients(data))
  .catch(error => console.log(error)), []);


  // const filterPatientId = () => {
  //   for (let i = 0; i<allPatients.length; i++){
  //     if (allPatients[i].patientName === patientName ){
  //       console.log(allPatients[i].patientNhsId)
  //       setPatientId(allPatients[i].patientNhsId)
  //       console.log("match found")
  //       return true;
  //     }
  //   }
  // }
  
  
  
//   const handlePatientIdChange = (event) => {
//     setPatientId(event.target.value)
// }
//   const handleNameChange = (event) => {
//     const patientName = filterPatientId()
//     if(filterPatientId){
//     setPatientName(event.target.value)
//     }else if (patientName!==undefined){
//       setPatientName(patientName)
//     }
// }

const handleDateChange = (event) => {
    setDate(event.target.value)
}

const handleTimeChange = (event) => {
    setTime(event.target.value)
}



  return (
    <article className='doctor-Appointment'>
      <div className='delete-btn-position'><DeleteButton id = {id} deleteButtonClick={handleDeleteAppointment}/></div>
        <p className='doctor-appointment-content'>Patient:</p>
        <input value={patientName} disabled />
        {/* {!isDisabled? <><p>Patient id</p>
        <input value={patientId} disabled={isDisabled} onChange={handlePatientIdChange} />
        <input type="submit" value="find" onClick={filterPatientId} />
        </>: console.log("disabled ")} */}
        <p className='doctor-appointment-content'>Date:</p>
        <input value={date} disabled={isDisabled} onChange={handleDateChange}/>
        <p className='doctor-appointment-content'>Time:</p>
        <input value={time} disabled={isDisabled} onChange={handleTimeChange}/>
        <div className='update-btn-position'> <UpdateButton showIsDisabled={showIsDisabled} updateAppointment={updateAppointment} id = {id}  date={date} time={time} /> </div>
        
    </article>
  )
}

export default DoctorAppointment;

