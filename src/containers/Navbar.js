import React, { useState } from 'react'
import LoginButton from '../components/LoginButton'
import { Link } from 'react-router-dom'
import SignUpButton from '../components/SignUpButton'
import LogoutButton from '../components/LogoutButton'
import AboutUsButton from '../components/AboutUsButton'


const Navbar = ({ isLoggedIn, setLoginStatus, updateCurrentUser}) => {

  const [isMobile, setIsMobile] = useState(false)

  
  return (
  
    <header className='navBar'>
      
    <Link to= "/">
      <div className='firstImage' alt = "Blue Health First logo"></div>
    {/* <img src = {healthFirstLogo} alt = "Blue Health First logo" className='logo'></img>
    <img src = {healthFirstLogoInverse} className='logo-inverse'></img> */}
    </Link>
  

    <div className={isMobile? 'navRight-mobile': 'navRight'} onClick={()=> setIsMobile(false)}>
      <AboutUsButton/>
      <button type="button" onClick={(e) => {e.preventDefault(); window.location.href='http://google.com';}}> Our Services</button>
      {isLoggedIn ? <LogoutButton setLoginStatus={setLoginStatus} updateCurrentUser={updateCurrentUser}/> : <LoginButton />}
      {isLoggedIn ? <></> : <SignUpButton/>}
    </div>
    
    <button className='mobile-menu-icon'
    onClick={()=>setIsMobile(!isMobile)}>
      {isMobile? <i className='fas fa-times'></i>: <i className='fas fa-bars'></i>}
    </button>
    </header>
  )          
}

export default Navbar;
