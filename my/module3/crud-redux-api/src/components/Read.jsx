import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUsers } from '../features/userDetailSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';

function Read() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(showUsers());
  }, []);

  if (loading) {
    return <h2>Loading..</h2>
  }

  return (
    <div className='container-fluid'>
      {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
      <h2>All Data</h2>
      <div className="row">
        
          {users &&
            users.map((ele) => (
              <div className="col-md-4" key={ele.id}>
              <div className="card w-100 mx-auto my-2" >
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                  <p className="card-text">{ele.gender}</p>
                  <button
                    className="btn btn-info mt-2 me-4"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`} className="btn btn-primary mt-2 me-4">Edit</Link>
                  <button className="btn btn-danger mt-2 me-4" onClick={() => dispatch(deleteUser(ele.id))}>Delete</button>
                </div>
              </div>
              </div>
            ))}
        
      </div>
    </div>
  )
}

export default Read;