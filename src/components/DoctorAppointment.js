import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const DoctorAppointment = ({ id, oneDoctorAppointment, handleDeleteAppointment, updateAppointment}) => {
  
  const [isDisabled, setIsDisabled] = useState(true);
  const showIsDisabled = () => {
    if (isDisabled) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const [patientId, setPatientId] = useState(0);
  const [patientName, setPatientName] = useState(oneDoctorAppointment.patientName);
  const [date, setDate] = useState(oneDoctorAppointment.appointmentDate);
  const [time, setTime] = useState(oneDoctorAppointment.appointmentTime);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <article className="doctor-appointment-card">
      <div className="appointment-card-left">
        <div className="patient-info">
          <p className="patient-title">Patient:</p>
          <input value={patientName} disabled className="patient-input" />
        </div>

        <div className="date-info">
          <p className="date-title">Date:</p>
          <input
            value={date}
            disabled={isDisabled}
            onChange={handleDateChange}
            className="date-input"
          />
        </div>

        <div className="time-info">
          <p className="time-title">Time:</p>
          <input
            value={time}
            disabled={isDisabled}
            onChange={handleTimeChange}
            className="time-input"
          />
        </div>
      </div>

      <div className="appointment-card-right">
        <div className="delete-btn-position">
          <DeleteButton id={id} deleteButtonClick={handleDeleteAppointment} />
        </div>
        <div className="update-btn-position">
          {" "}
          <UpdateButton
            showIsDisabled={showIsDisabled}
            updateAppointment={updateAppointment}
            id={id}
            date={date}
            time={time}
            patientId={patientId}
          />{" "}
        </div>
      </div>
    </article>
  );
};

export default DoctorAppointment;
