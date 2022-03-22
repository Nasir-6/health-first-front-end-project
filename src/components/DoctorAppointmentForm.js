import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function DoctorAppointmentForm({patientList}) {

    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [patientName,setPatientName] = useState("")

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handlePatientNameChange = (e) => {
        console.log("hello")
    //    console.log(e.target.value)
        console.log(patientName)
        setPatientName(e.target.options[e.target.selectedIndex].text )
        console.log(patientName)

        // console.log(e.target.options[e.target.selectedIndex].text);  //
        // const name=e.target.options[e.target.selectedIndex].text 
        // console.log(name)
        // e.target.options[e.target.selectedIndex].selected = true 
        
        // setPatientName(name)
        
    }


  return (
    <>
    <div>DoctorAppointmentForm</div>
    {/* <form onSubmit={this.handleSubmit}> */}
    <form>
        <label>
          Patient Name:
          {/* <select value={this.state.value} onChange={this.handleChange}> */}
          <select onChange={handlePatientNameChange} value="hh">
              {patientList.map((patient)=> {
                  return(
                  <option key = {patient.patientNhsId} value = {patient.patientName}>{patient.patientName}</option>
                  )
              })}
          </select>
        </label>
        <label> Date</label>
        <input value ={date} onChange={handleDateChange}/>
        <label> Time </label>
        <input value ={time} onChange={handleTimeChange}/>
        <input type="submit" value="Submit" />
      </form>
    </>

  )
}

export default DoctorAppointmentForm