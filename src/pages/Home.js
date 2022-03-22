import React from 'react'
import doctorImage from '../images/doctorImage.jpg'

const Home = () => {
  return (
    <>
    <h2>We put your health first</h2>

      <body>
      <img src = {doctorImage} className='doctorImage'></img>
      </body>

      </>
    
  )
}

export default Home;
