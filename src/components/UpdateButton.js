import React, { useEffect,useState } from 'react'
import FinaliseUpdateButton from './FinaliseUpdateButton';

const UpdateButton= ({showIsDisabled, updateAppointment, patientName, id, date, time, patientId}) =>  {
  const [isUpdating, setIsUpdating] = useState(false);
  const showIsUpdating = () => {
    showIsDisabled()
    if(isUpdating){
      setIsUpdating(false)
    }else{
      setIsUpdating(true)
  
    }
  }

  return (
    <>
    
    {isUpdating? 
    <FinaliseUpdateButton updateAppointment={updateAppointment} id = {id} patientName={patientName} date={date} time={time} patientId={patientId} showIsDisabled= {showIsDisabled} showIsUpdating ={showIsUpdating}/>
    : 
    <button onClick={showIsUpdating}>Update</button> }
    </>
  )
}

export default UpdateButton