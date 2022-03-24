import React, { useState } from 'react'


function PatientAppointment({onePatientAppointment}) {

    const [doctorName, setDoctorName] = useState(onePatientAppointment.doctorName)
    const [date, setDate] = useState(onePatientAppointment.appointmentDate);
    const [time, setTime] = useState(onePatientAppointment.appointmentTime);

  return (

   
    <article className="doctor-appointment-card">
        
    <div className="appointment-card-left">
      <div className="patient-info">
        <p className="patient-title">Doctor:</p>
        <input value={doctorName} disabled className="patient-input" />
      </div>

      <div className="date-info">
        <p className="date-title">Date:</p>
        <input
        value={date}
          disabled
          className="date-input"
        />
      </div>

      <div className="time-info">
        <p className="time-title">Time:</p>
        <input
          value={time}
          disabled
          className="time-input"
        />
      </div>
    </div>
  </article>

  )
}

export default PatientAppointment