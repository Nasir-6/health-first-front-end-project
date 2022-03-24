import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './containers/Navbar'
import DoctorPage from './pages/DoctorPage'
import Home from './pages/Home';
import Login from './pages/Login';
import PatientPage from './pages/PatientPage';
import SignUp from './pages/SignUp';
import Footer from './containers/Footer';
import { type } from '@testing-library/user-event/dist/type';


function App() {


    //Make isLogged in state here - so can share with navbar and update using login
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // useEffect to read in value on mount
    useEffect(() => {
      const isLoggedInFlagInSessionStorage = Boolean(sessionStorage.getItem('isLoggedIn'));
      if(isLoggedInFlagInSessionStorage == true || isLoggedInFlagInSessionStorage == false){
        setIsLoggedIn(isLoggedInFlagInSessionStorage);
      }
    }, []);
    // useEffect to store isLoggedIn Flag 
    useEffect(() => {
      sessionStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);
  
  
    // FUnction to pass down to login/navbar buttons - loginStatus is either true or false
    // Chnage name to update Login Status
    const setLoginStatus = (loginStatus) => {
      setIsLoggedIn(loginStatus);
    }
    


  const[currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const currentUserInSessionStorage = JSON.parse(sessionStorage.getItem('currentUser'));
    setCurrentUser(currentUserInSessionStorage);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);



  const updateCurrentUser = (newUser) => {
    if(newUser === null){
      setCurrentUser(null)
    } else {
      setCurrentUser({
        name: newUser.name,
        id: newUser.id
      });
    }
  }



  return (
    <Router>
      <div className="app">
        <Navbar isLoggedIn={isLoggedIn} setLoginStatus={setLoginStatus} updateCurrentUser={updateCurrentUser}/>
        {/* <i class="fa-solid fa-x fa-3x"></i> */}

        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/doctor/:doctorName" element={<DoctorPage/>} /> */}
          <Route exact path="/doctor/:doctorId" element={<DoctorPage currentDoctor={currentUser}/>} />
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} updateCurrentUser={updateCurrentUser}/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/patient" element={<PatientPage/>} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
