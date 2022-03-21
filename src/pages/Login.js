import React from 'react'

const Login = () => {

    //State for whether loggin in as Doctor or Patient
    const [isDoctor, setIsDoctor] = React.useState(true);

  const handleRadioChange = (event) => {
      // event target value is the value of radio button (cannot convert "true" to true so use ifelse statement to setState!)
      if(event.target.value === "doctor"){
        setIsDoctor(true)
      } else{
          setIsDoctor(false)
      }

  }


  return (
    <div className="login-card">
      <h2>Login</h2>

      <form>
        <p>Login as a:</p>

        <input type="radio" id="doctorChoice" name="doctor" value="doctor" checked={isDoctor === true} onChange={handleRadioChange}/>
        <label htmlFor="doctorChoice">Doctor</label>

        <input type="radio" id="patientChoice" name="patient" value="patient" checked={isDoctor === false} onChange={handleRadioChange} />
        <label htmlFor="patientChoice">Patient</label>
      </form>

      


    </div>
  );
}

export default Login;
