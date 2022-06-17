import PatientLoginForm from '../components/PatientLoginForm';
import DoctorLoginForm from '../components/DoctorLoginForm';
import image from "../images/signUpImage.jpeg"
// import nurse from '../images/nurse.jpg';
import {useState} from 'react'

const SignUp = ({setIsLoggedIn, updateCurrentUser}) => {
     //State for whether login in as Doctor or Patient
     const [isDoctor, setIsDoctor] = useState(true);

     const handleRadioChange = (event) => {
         // event target value is the value of radio button (cannot convert "true" to true so use ifelse statement to setState!)
         if(event.target.value === "doctor"){
           setIsDoctor(true)
         } else{
             setIsDoctor(false)
         }
   
     }
   
   
     return (
       <div className='login-page'>
       <div className="login-card">
         <div className='login-card-left' style={{backgroundImage: `url(${image})` }}>
         
         </div>
         
       <div className="login-card-right">
   
         <h2>Sign Up</h2>
         
   
         <form className='radio-container'>
           {/* <p>Login as a:</p> */}
   
           <div className='doctor-radio'>
           <input type="radio" id="doctorChoice" name="doctor" value="doctor" checked={isDoctor === true} onChange={handleRadioChange}/>
           <label htmlFor="doctorChoice">Doctor</label>
           </div>
   
           <div className='patient-radio'>
           <input type="radio" id="patientChoice" name="patient" value="patient" checked={isDoctor === false} onChange={handleRadioChange} />
           <label htmlFor="patientChoice">Patient</label>
           </div>
         
   
         </form>
         <p style={{color: "red"}}>No signup functionality yet!!</p>
   
         {isDoctor ? <DoctorLoginForm setIsLoggedIn={setIsLoggedIn} updateCurrentUser={updateCurrentUser}/> : <PatientLoginForm setIsLoggedIn={setIsLoggedIn} updateCurrentUser={updateCurrentUser} />}
   
         </div>
       </div>
       </div>
     );
}

export default SignUp;
