import React from 'react'

const DeleteButton= ({deleteButtonClick, id}) =>  {

  return (
    <>
    <button className='delete-btn' id={id} onClick={(e)=>deleteButtonClick(e)} >
        <i className="fa-solid fa-x"></i>
    </button>
    </>
  )
}

export default DeleteButton