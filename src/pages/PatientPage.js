import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PatientAppointmentsContainer from '../containers/PatientAppointmentsContainer';
import IncorrectUser from '../components/IncorrectUser';

const PatientPage= ({currentPatient}) => {
  const [patientName, setPatientName] = useState("")
  const { patientId } = useParams();
  const [patientAppointmentsList, setPatientAppointmentsList] = useState([]);
  const getPatientAppointmentsUrl = 
  "http://localhost:8080/appointments/patientId/" + patientId;
  
  


  //Save current user 

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

  useEffect(() => {
    console.log(patientId);
    console.log(currentPatient);
    if (currentPatient === null) {
      setIsCorrectUser(false);
    } else if (patientId == currentPatient.id) {
      setIsCorrectUser(true);
    } else if (patientId != currentPatient.id) {
      setIsCorrectUser(false);
    }
  }, [patientId, currentPatient]);







  useEffect(() => {
    fetch("http://localhost:8080/patients")
      .then((response) => response.json())
      .then((data) => {
        return data.filter((d) => {
          if (d.patientNhsId == patientId) {
            console.log(d.patientName);
            setPatientName(d.patientName);
          }
        });
      })
      .catch((error) => console.log(error));
  }, []);

 
  useEffect(
    () =>
      fetch(getPatientAppointmentsUrl)
        .then((response) => response.json())
        .then((data) => setPatientAppointmentsList(data))
        .catch((error) => console.log(error)),
    [patientAppointmentsList]
  );






  return (
    <>
      {isCorrectUser ? (
        <div className="doctor-page-container">
          <h2 data-testid="doctor-greeting" id="doctor-welcome">
            {"Hi " + patientName}
          </h2>
          <PatientAppointmentsContainer
            patientAppointmentsList={patientAppointmentsList}
          />
        </div>
      ) : (
        <IncorrectUser currentUser={currentPatient}/>
      )}
    </>
  );
}

export default PatientPage