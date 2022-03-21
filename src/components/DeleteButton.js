import React from 'react'

const DeleteButton= ({deleteButtonClick}) =>  {

  return (
    <button className='delete-btn' onClick={deleteButtonClick}>
        <i className="fa-solid fa-x"></i>
    </button>
  )
}

export default DeleteButton