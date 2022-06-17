import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DashboardButton = ({currentUser}) => {

  const [dashboardPath, setDashboardPath] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    if(currentUser == null){
      setDashboardPath("");
    } else if(currentUser.isUserDoctor){
      setDashboardPath(`/doctor/${currentUser.id}`)
    } else{
      setDashboardPath(`/patient/${currentUser.id}`)
    }
  }, [currentUser]);
  
  return (
    <Link to= {dashboardPath} className='dashboard-btn'>
    <button>Dashboard</button>
    
    </Link>
  )
}

export default DashboardButton;
