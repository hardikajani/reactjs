import React from 'react'
import "./customeModal.css"
import { useSelector } from 'react-redux'

const CustomModal = ({id, showPopup, setShowPopup}) => {

    const allUsers = useSelector((state)=>state.app.users);

    const singleUsers = allUsers.filter((ele) => ele.id === id);
  return (
    <div className='modalBackground'>
        <div className="modalContainer">
            <button className='btn btn-danger' onClick={()=>setShowPopup(false)}>X</button>
            <h2>{singleUsers[0].name}</h2>
            <h3>{singleUsers[0].email}</h3>
            <h4>Age:{singleUsers[0].age}</h4>
            <h4>{singleUsers[0].gender}</h4>
        </div>

    </div>
  )
}

export default CustomModal