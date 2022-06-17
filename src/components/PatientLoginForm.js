import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../Constants';

const PatientLoginForm = ({setIsLoggedIn, updateCurrentUser}) => {


          // Set all states to empty at start
          const [patientName, setpatientName] = useState("");
          const [patientNhsId, setpatientNhsId] = useState("");
          const [invalidTextWarning, setInvalidTextWarning] = useState("");
          const navigate = useNavigate();
      
          // // create onchange event handlers!!
          const handlepatientNameChange = (event) => {
              setpatientName(event.target.value);
          }
      
          const handlepatientNhsIdChange = (event) => {
              setpatientNhsId(event.target.value);
          }
  
  
          // // Fetch request to grab patientByID
          const getpatientById = async (id) =>{
              const patient = await fetch(`${SERVER_URL}/patients/${id}`)
              .then(response => response.json())
              // .then(data => console.log(data))
              .catch(error => console.error(error))
  
              return patient;            
          }
      
          // Form submit handler
          // MAKE SURE TO HAVE async and await to ensure promise is returned before moving onto next line of code!!!
          const handleFormSubmit = async (event) => {
              event.preventDefault();
              //validate inputs (if empty just exits don't submit or do anything)

              
              
              setInvalidTextWarning(" ");
  
              if(!patientName || !patientNhsId){
                  setInvalidTextWarning("Please enter missing fields");
                  return
              }
              
      
              // Check if patient is DB!!
              const patientInDb = await getpatientById(patientNhsId);
                    
              
              if(patientInDb === null || patientInDb === undefined || patientInDb.status === 404){
                console.log('Im here');
                  setInvalidTextWarning("Invalid name or ID");
                  return
              } else if(patientInDb.patientName.toLowerCase() != patientName.toLowerCase()){
                  setInvalidTextWarning("Incorrect name or ID");
                  return
              }else if(patientInDb.patientName.toLowerCase() === patientName.toLowerCase()){
                  setInvalidTextWarning(" ");
                  setIsLoggedIn(true)
                  // Also set the currentUser
                  updateCurrentUser({
                      name: patientName,
                      id: patientNhsId,
                      isUserDoctor: false
                  })
                  navigate(`/patient/${patientInDb.patientNhsId}`);
                  return
              } else {
                  setInvalidTextWarning("Something went wrong");
              }
  
          }

          const handleDemoButtonClick = () => {
            setpatientName("Suraya")
            setpatientNhsId("1")
          }
  
  


  return (
    <>
    <form onSubmit={handleFormSubmit} className="login-form">
      <div className="name-input-container">
      <label htmlFor="patientName">Name</label>
      <input
        type="text"
        id="patientName"
        name="patientName"
        value={patientName}
        onChange={handlepatientNameChange}
        className="text-input"
      />
      </div>

      <div className="id-input-container">
      <label htmlFor="patientNhsId" className="id-label">ID</label>
      <input
        type="number"
        id="patientNhsId"
        name="patientNhsId"
        value={patientNhsId}
        onChange={handlepatientNhsIdChange}
        className="text-input"
      />
      </div>
      

      <p className="invalidText">{invalidTextWarning}</p>

      <input type="submit" value="Login" className="button login-page-btn" />
      <button className="button demo-login-button" onClick={handleDemoButtonClick}>Demo Login</button>
    </form>
  </>
  )
}

export default PatientLoginForm;