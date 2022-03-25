import React from 'react'
import image from "../images/incorrectLogin.gif"

const IncorrectUser = ({currentUser}) => {
  return (
    <div className='incorrect-container'>
        <h2>Incorrect user - Please login again</h2>
        {currentUser==null? <></> :<h2>{`You are currently logged in as ${currentUser.name[0].toUpperCase()}${currentUser.name.substring(1)}`}</h2>}
        <img src={image} alt="loading..." height="500px"/>
    </div>
  )
}

export default IncorrectUser;
