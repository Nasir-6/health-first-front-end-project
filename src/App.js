import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './containers/Navbar'
import DoctorPage from './pages/DoctorPage'
import Home from './pages/Home';
import Login from './pages/Login';
import PatientPage from './pages/PatientPage';
import SignUp from './pages/SignUp';
import Footer from './containers/Footer';


function App() {

  //Make isLogged in state here - so can share with navbar and update using login
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // FUnction to pass down to login/navbar buttons - loginStatus is either true or false
  const setLoginStatus = (loginStatus) => {
    setIsLoggedIn(loginStatus);
  }

  return (
    <Router>
      <div className="app">
        <Navbar isLoggedIn={isLoggedIn} setLoginStatus={setLoginStatus}/>
        {/* <i class="fa-solid fa-x fa-3x"></i> */}

        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/doctor/:doctorName" element={<DoctorPage/>} /> */}
          <Route exact path="/doctor/:doctorId" element={<DoctorPage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/patient" element={<PatientPage/>} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
