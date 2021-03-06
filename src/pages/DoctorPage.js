import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import DoctorAppointmentsContainer from '../containers/DoctorAppointmentsContainer';
import DoctorFormContainer from '../containers/DoctorFormContainer';
import bookingImage from '../images/bookingImage.png'
import IncorrectUser from '../components/IncorrectUser';
import { SERVER_URL } from '../Constants';

const DoctorPage = ({ currentDoctor }) => {
  const [patientList, setPatientList] = useState([]);
  useEffect(() => {
    fetch(SERVER_URL + "/patients")
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
    fetch(SERVER_URL + "/doctors")
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
  const getDoctorAppointmentsUrl = SERVER_URL + "/appointments/doctorId/" + doctorId;
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
    const deleteAppointmentUrl = SERVER_URL + "/appointments/" + appointmentId;
    await fetch(deleteAppointmentUrl, {
      method: "DELETE",
    });

    getAppointmentsList();
  };

  const updateAppointment = async (x, id) => {
    console.log(x);
    console.log(id);
    const updateAppointmentUrl = SERVER_URL + "/appointments/" + id;
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
    fetch(SERVER_URL + "/appointments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    })
      // .then((res) => res.json())
      .then((res) => setDoctorAppointmentsList([...doctorAppointmentsList, newAppointment]))
      .catch(error => console.error(error))

  };

  return (
    <>
      {isCorrectUser ? 
      (
        <div className="doctor-page-container">
          <h2 data-testid="doctor-greeting" id="doctor-welcome">
            {"Hi " + doctorName}
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

          <img src = {bookingImage} className='bookingImage' alt = "Image of Doctors and Patients standing together" ></img>
        </div>
      ) : (
        <IncorrectUser currentUser={currentDoctor}/>
      )}
    </>
  );
};

export default DoctorPage;
