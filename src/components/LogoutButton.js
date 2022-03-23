import React from 'react'
import { Link } from 'react-router-dom'

const LogoutButton = ({setLoginStatus, updateCurrentUser}) => {

  // Use arrow function setLoginStatus is not called when rendered

  const handleLogoutButtonClick = () => {
    setLoginStatus(false)
    updateCurrentUser(null);
  }
  
  return (
    <Link to= "/">
    <button onClick={handleLogoutButtonClick}>Logout</button>
    </Link>
  )
}

export default LogoutButton;
