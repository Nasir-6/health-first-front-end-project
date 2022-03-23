import React from 'react'
import { Link } from 'react-router-dom'

const LogoutButton = ({setLoginStatus}) => {

  // Use arrow function setLoginStatus is not called when rendered
  return (
    <Link to= "/">
    <button onClick={() => {setLoginStatus(false)}}>Logout</button>
    </Link>
  )
}

export default LogoutButton;
