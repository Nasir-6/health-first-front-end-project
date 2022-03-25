import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const DoctorLoginForm = ({setIsLoggedIn, updateCurrentUser}) => {

        // Set all states to empty at start
        const [doctorName, setDoctorName] = useState("");
        const [doctorId, setDoctorId] = useState("");
        const [invalidTextWarning, setInvalidTextWarning] = useState("");
        const navigate = useNavigate();
    
        // create onchange event handlers!!
        const handleDoctorNameChange = (event) => {
            setDoctorName(event.target.value);
        }
    
        const handleDoctorIdChange = (event) => {
            setDoctorId(event.target.value);
        }


        // Fetch request to grab doctorByID
        const getDoctorById = async (id) =>{
            const doctor = await fetch(`http://localhost:8080/doctors/${id}`)
            .then(response => response.json())
            // .then(data => console.log(data))
            .catch(error => console.error(error))

            return doctor;            
        }
    
        // Form submit handler
        // MAKE SURE TO HAVE async and await to ensure promise is returned before moving onto next line of code!!!
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            //validate inputs (if empty just exits don't submit or do anything)

            setInvalidTextWarning(" ");

            if(!doctorName || !doctorId){
                setInvalidTextWarning("Please enter missing fields");
                return
            }
    
            // Check if Doctor is DB!!
            const doctorInDb = await getDoctorById(doctorId);            

            if(doctorInDb === null || doctorInDb === undefined || doctorInDb.status === 404){
                setInvalidTextWarning("Invalid name or ID");
                return
            } else if(doctorInDb.doctorName.split(" ")[1].toLowerCase() != doctorName.toLowerCase()){
                setInvalidTextWarning("Incorrect name or ID");
                return
            }else if(doctorInDb.doctorName.split(" ")[1].toLowerCase() === doctorName.toLowerCase()){
                setInvalidTextWarning(" ");
                setIsLoggedIn(true)
                // Also set the currentUser
                updateCurrentUser({
                    name: doctorName,
                    id: doctorId
                })
                navigate(`/doctor/${doctorInDb.doctorId}`);
                return
            } else {
                setInvalidTextWarning("Something went wrong");
            }

        }





  return (
    <>
      <form onSubmit={handleFormSubmit} className="login-form">
        <div className="name-input-container">
        <label htmlFor="doctorName">Name</label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          value={doctorName}
          onChange={handleDoctorNameChange}
          className="text-input"
        />
        </div>

        <div className="id-input-container">
        <label htmlFor="doctorId" className="id-label">ID</label>
        <input
          type="number"
          id="doctorId"
          name="doctorId"
          value={doctorId}
          onChange={handleDoctorIdChange}
          className="text-input"
        />
        </div>
        

        <p className="invalidText">{invalidTextWarning}</p>

        <input type="submit" value="Login" className="button login-page-btn" />
      </form>
    </>
  );
};

export default DoctorLoginForm;
