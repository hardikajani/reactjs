import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [users, setUsers] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUserData = (e) =>{
        setUsers({...users, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("users...", users);        
        dispatch(createUser(users))
        navigate("/read");
    }


    return (
        <div>
            <h2 className='my-2'>Fill the data</h2>
            <form className='w-25 mx-auto my-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" className="form-control" name='age' onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="Male" onChange={getUserData} />
                        <label className="form-check-label">
                            Male
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="Female" onChange={getUserData}  />
                        <label className="form-check-label">
                            Female
                        </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create