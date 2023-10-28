import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const usenavigate = useNavigate();
  const logout = () =>{
    usenavigate('/login');

  }
  useEffect(()=>{
    let username=sessionStorage.getItem('username');
    if(username===''|| username===null){
      usenavigate('/login');
    }
  },[])
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
