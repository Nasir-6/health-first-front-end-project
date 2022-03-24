import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import DoctorAppointmentsContainer from '../containers/DoctorAppointmentsContainer';
import DoctorFormContainer from '../containers/DoctorFormContainer';
import bookingImage from '../images/bookingImage.png'

const DoctorPage = ({ currentDoctor }) => {
  const [patientList, setPatientList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/patients")
      .then((response) => response.json())
      .then((data) => setPatientList(data))
      .catch((error) => console.log(error));
  }, []);

  const [isCorrectUser, setIsCorrectUser] = useState(false);

  // once mounted get isCorrectFlag from sessionStorage and set it!! (convert and check if boolean)
  useEffect(() => {
    const isCorrectUserFlagInSessionStorage = Boolean(
      sessionStorage.getItem("isCorrectUser")
    );
    // maybe a typeof
    if (typeof isCorrectUserFlagInSessionStorage == Boolean) {
      setIsCorrectUser(isCorrectUserFlagInSessionStorage);
    }
  }, []);
  // use localStorage to persist state!!
  // Store currentIndex when it changes
  useEffect(() => {
    sessionStorage.setItem("isCorrectUser", isCorrectUser);
  }, [isCorrectUser]);

  const [doctorName, setDoctorName] = useState("");

  const { doctorId } = useParams();
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

  useEffect(() => {
    fetch("http://localhost:8080/doctors")
      .then((response) => response.json())
      .then((data) => {
        return data.filter((d) => {
          if (d.doctorId == doctorId) {
            console.log(d.doctorName);
            setDoctorName(d.doctorName);
          }
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const [doctorAppointmentsList, setDoctorAppointmentsList] = useState([]);
  // const [isUpdated, setIsUpdated] = useState(false);
  const getDoctorAppointmentsUrl =
    "http://localhost:8080/appointments/doctorId/" + doctorId;
  useEffect(
    () =>
      fetch(getDoctorAppointmentsUrl)
        .then((response) => response.json())
        .then((data) => setDoctorAppointmentsList(data))
        .catch((error) => console.log(error)),
    [doctorAppointmentsList]
  );

  const getAppointmentsList = () => {
    fetch(getDoctorAppointmentsUrl)
      .then((response) => response.json())
      .then((data) => setDoctorAppointmentsList(data))
      .catch((error) => console.log(error));
  };

  const deleteAppointment = async (e) => {
    console.log(e.currentTarget.id);
    const appointmentId = e.currentTarget.id;

    console.log(appointmentId);
    const deleteAppointmentUrl =
      "http://localhost:8080/appointments/" + appointmentId;
    await fetch(deleteAppointmentUrl, {
      method: "DELETE",
    });

    getAppointmentsList();
  };

  const updateAppointment = async (x, id) => {
    console.log(x);
    console.log(id);
    const updateAppointmentUrl = "http://localhost:8080/appointments/" + id;
    console.log(updateAppointmentUrl);

    fetch(updateAppointmentUrl, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(x),
    });
    console.log("updating done");
  };

  const addAppointment = (newAppointment) => {
    fetch("http://localhost:8080/appointments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((res) =>
        setDoctorAppointmentsList([...doctorAppointmentsList, newAppointment])
      );
  };

  return (
    <>
      {isCorrectUser ? 
      (
        <div className="doctor-page-container">
          <h2 data-testid="doctor-greeting" id="doctor-welcome">
            {"Hi doctor " + doctorId}
          </h2>
          <DoctorAppointmentsContainer
            doctorAppointmentsList={doctorAppointmentsList}
            handleDeleteAppointment={deleteAppointment}
            updateAppointment={updateAppointment}
          />
          <DoctorFormContainer
            patientList={patientList}
            handleAppointmentSubmission={addAppointment}
          />

          <img src = {bookingImage} className='bookingImage'></img>
        </div>
      ) : (
        <h2> Incorrect user- Please login again </h2>
      )}
    </>
  );
};

export default DoctorPage;
