import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './containers/Navbar'
import DoctorPage from './pages/DoctorPage'
import Home from './pages/Home';
import Login from './pages/Login';
import PatientPage from './pages/PatientPage';
import SignUp from './pages/SignUp';
import Footer from './containers/Footer';


function App() {

  // useEffect(() => {
  //   fetch("http://localhost:8080/appointments/bloodtype/A")
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error))
  // }, [])

  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* <i class="fa-solid fa-x fa-3x"></i> */}

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/doctor/:doctorName" element={<DoctorPage/>} />
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
