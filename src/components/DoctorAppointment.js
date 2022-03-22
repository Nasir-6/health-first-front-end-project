import React, { useState } from 'react'
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

  const [patientName, setPatientName] = useState(oneDoctorAppointment.patientName);
  const [date, setDate] = useState(oneDoctorAppointment.appointmentDate);
  const [time, setTime] = useState(oneDoctorAppointment.appointmentTime);
  const handleNameChange = (event) => {
    setPatientName(event.target.value)
}

const handleDateChange = (event) => {
    setDate(event.target.value)
}

const handleTimeChange = (event) => {
    setTime(event.target.value)
}

  return (
    <article className='doctor-Appointment'>
      <div className='delete-btn-position'><DeleteButton id = {id} deleteButtonClick={handleDeleteAppointment}/></div>
        <p>Patient:</p>
        <input value={patientName} disabled={isDisabled} onChange={handleNameChange} name="name"/>
        <p>Date:</p>
        <input value={date} disabled={isDisabled} onChange={handleDateChange}/>
        <p>Time:</p>
        <input value={time} disabled={isDisabled} onChange={handleTimeChange}/>
        <div className='update-btn-position'> <UpdateButton showIsDisabled={showIsDisabled} updateAppointment={updateAppointment} id = {id}  date={date} time={time}/> </div>
        
    </article>
  )
}

export default DoctorAppointment;

