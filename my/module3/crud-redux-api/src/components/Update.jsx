import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userDetailSlice';

const Update = () => {

    const {id} = useParams();
    const [updateData, setUpdateData] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {users, loading} = useSelector((state)=> state.app);

    useEffect(() => {
      if(id){
        const singleUser = users.filter((ele)=> ele.id === id)
        setUpdateData(singleUser[0]);
      }
    }, [])

    const newData = (e)=>{
        setUpdateData({...updateData, [e.target.name]: e.target.value})
    }

    const handleUpdate = (e)=>{
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read");


    };
  return (
    <div>
            <h2 className='my-2'>Edit the data</h2>
            <form className='w-25 mx-auto my-5' onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name='name'
                    value={updateData && updateData.name} 
                    onChange={newData} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    name='email'
                    value={updateData && updateData.email}
                    onChange={newData}  
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name='age'
                    value={updateData && updateData.age}
                    onChange={newData}  
                    />

                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                </div>
                <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    value="Male"
                    checked = {updateData && updateData.gender==='Male'} 
                    onChange={newData} 
 
                    />
                        <label className="form-check-label">
                            Male
                        </label>
                </div>
                <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    value="Female"
                    checked = {updateData && updateData.gender==='Female'}
                    onChange={newData} 
  
                    />
                        <label className="form-check-label">
                            Female
                        </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
  )
}

export default Update