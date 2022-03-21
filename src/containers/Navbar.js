import React from 'react'
import healthFirstLogo from '../images/healthFirstLogo.png'
import LoginButton from '../components/LoginButton'
import { Link } from 'react-router-dom'
import SignUpButton from '../components/SignUpButton'

const Navbar = () => {

  
  return (
  
    <>

    <Link to= "/">
    <img src = {healthFirstLogo} alt = "Blue Health First logo"/>
    </Link>

    <LoginButton/>
    <SignUpButton/>
    </>
  )
}

export default Navbar;
