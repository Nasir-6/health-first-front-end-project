import React, { useEffect,useState } from 'react'
import FinaliseUpdateButton from './FinaliseUpdateButton';

const UpdateButton= ({showIsDisabled, updateAppointment, id, date, time}) =>  {
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
        Update Button
    </button>
    {isUpdating? <FinaliseUpdateButton updateAppointment={updateAppointment} id = {id} date={date} time={time}/>: console.log("not updating")}
    </>
  )
}

export default UpdateButton