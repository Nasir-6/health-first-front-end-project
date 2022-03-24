import React from 'react'
import LoginButton from '../components/LoginButton'
import { Link } from 'react-router-dom'
import SignUpButton from '../components/SignUpButton'
import LogoutButton from '../components/LogoutButton'


const Navbar = ({ isLoggedIn, setLoginStatus, updateCurrentUser}) => {

  
  return (
  
    <header className='navBar'>
      
    <Link to= "/">
      <div className='firstImage' alt = "Blue Health First logo"></div>
    {/* <img src = {healthFirstLogo} alt = "Blue Health First logo" className='logo'></img>
    <img src = {healthFirstLogoInverse} className='logo-inverse'></img> */}
    </Link>
  

    <div className='navRight'>
    <button type="button" onClick={(e) => {e.preventDefault(); window.location.href='http://google.com';}}> About Health First</button>
    <button type="button" onClick={(e) => {e.preventDefault(); window.location.href='http://google.com';}}> Our Services</button>
    {isLoggedIn ? <LogoutButton setLoginStatus={setLoginStatus} updateCurrentUser={updateCurrentUser}/> : <LoginButton />}
    {isLoggedIn ? <></> : <SignUpButton/>}
    
    </div>
    </header>
  )
}

export default Navbar;
