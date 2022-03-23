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
    <button onClick={showIsUpdating}>
        Update
    </button>
    {isUpdating? <FinaliseUpdateButton updateAppointment={updateAppointment} id = {id} patientName={patientName} date={date} time={time} patientId={patientId} showIsDisabled= {showIsDisabled} showIsUpdating ={showIsUpdating}/>: console.log("not updating")}
    </>
  )
}

export default UpdateButton