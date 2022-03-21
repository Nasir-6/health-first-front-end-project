import React from "react";
import { useState } from 'react';

const DoctorLoginForm = () => {

        // Set all states to empty at start
        const [doctorName, setDoctorName] = useState("");
        const [doctorId, setDoctorId] = useState("");
    
        // create onchange event handlers!!
        const handleDoctorNameChange = (event) => {
            setDoctorName(event.target.value);
        }
    
        const handleDoctorIdChange = (event) => {
            setDoctorId(event.target.value);
        }

    
        // Form submit handler
        const handleFormSubmit = (event) => {
            event.preventDefault();
            //validate inputs (if empty just exits don't submit or do anything)
            if(!doctorName || !doctorId){
                return
            }
    
            // Check if Doctor is DB!!
    
    
    
            // Lastly reset all input states - maybe not needed
            setDoctorName("")
            setDoctorId("")
        }





  return (
    <>
      <h2>Doctor Form</h2>

      <form>
        <label htmlFor="doctorName">Name:</label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          value={doctorName}
          onChange={handleDoctorNameChange}
        />

        <label htmlFor="doctorId">Id:</label>
        <input
          type="number"
          id="doctorId"
          name="doctorId"
          value={doctorId}
          onChange={handleDoctorIdChange}
        />

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default DoctorLoginForm;
