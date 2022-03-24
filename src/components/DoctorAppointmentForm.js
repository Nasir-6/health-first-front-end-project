import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Select, { components } from "react-select";

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

    const [id, setId] = useState(0)
    const [patientOptions, setPatientOptions]= useState([])

    const handleIdChange = (e) => {
      console.log(e.value)
      setPatientId(e.value)
    }

    useEffect(()=> {
      console.log(patientList)
      const patientListOptions = patientList.map((patient) => {
        return {
          label: `${patient.patientNhsId}: ${patient.patientName}`,
          value: patient.patientNhsId
        };
      });
      // console.log(patientListOptions)
      setPatientOptions(patientListOptions)


    },[])
    
    
    
    

  return (
  
    <>
      {/* <form onSubmit={this.handleSubmit}> */}
      <form>
        
      

        <div className="form-card">
          <div className="form-card-left">
            <div className="patient-info">
              <label className='patient-title'> Patient: </label>
              <Select 
                className='patient-input'
                onChange={handleIdChange} 
                options={patientOptions} 
              />
              {/* <select value={this.state.value} onChange={this.handleChange}> */}
              {/* <select className='patient-input' onChange={handlePatientIdChange} value={patientId}>
                {patientList.map((patient) => {
                  return (
                    <option key={patient.patientNhsId} value={patient.patientNhsId}>
                      {patient.patientNhsId}: {patient.patientName}
                    </option>
                  )
                })}
              </select> */}
            </div>

         

          <div className="date-info">
            <label className='date-title'> Date</label>
            <input type="date" value={date} onChange={handleDateChange} className='date-input'/>
          </div>

          <div className="time-info">
            <label className='time-title'> Time </label>
            <input type="time" value={time} onChange={handleTimeChange} className='time-input'/>
          </div>

          </div>

          <div className="form-card-right">
            <button type="submit" value="Submit" onClick={onSubmission}>Submit</button>
          </div>
        </div>

      </form>

    </>
    
  )
}

export default DoctorAppointmentForm