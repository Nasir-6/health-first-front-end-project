import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function DoctorAppointmentForm({patientList, handleAppointmentSubmission}) {

    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [patientId,setPatientId] = useState(0)
    const {doctorId} = useParams()

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handlePatientIdChange = async (e) => {
        
        console.log("hello")
       console.log(e.target.value)
        console.log(`patient id before settiing ${patientId}`)
        // console.log(e.target.options[e.target.selectedIndex].text)
        const id = e.target.value
        // console.log(Id)
        setPatientId(id)
         console.log(`patient id after settiing ${patientId}`)
        // e.preventDefault(); 
    }

    function onSubmission (event){
        event.preventDefault(); 
        if(!time||!date||!patientId){
          console.log("empty form ")
          return
        }
        //TODO: validate input(date and time structure)
  

        const appointment = {
          patientNhsId: patientId,
          doctorId: doctorId,
          appointmentDate: date,
          appointmentTime: time
      }
      console.log(appointment)
      handleAppointmentSubmission(appointment)

    }

  return (
    <>
    <div>DoctorAppointmentForm</div>
    {/* <form onSubmit={this.handleSubmit}> */}
    <form>
        <label>
          Patient:
          {/* <select value={this.state.value} onChange={this.handleChange}> */}
          <select onChange={handlePatientIdChange} value={patientId}>
              {patientList.map((patient)=> {
                  return(
                  <option key = {patient.patientNhsId} value = {patient.patientNhsId}>
                    {patient.patientNhsId}: {patient.patientName}
                    </option>
                  )
              })}
          </select>
        </label>
        <label> Date</label>
        <input type ="date"value ={date} onChange={handleDateChange} data-testid="doctor-input-date"/>
        <label> Time </label>
        <input type ="time" value ={time} onChange={handleTimeChange} data-testid="doctor-input-time"/>
        <input type="submit" value="Submit" onClick={onSubmission} />
      </form>
    </>

  )
}

export default DoctorAppointmentForm