import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Nevbar() {
    const allUsers =  useSelector((state)=> state.app.users);
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <h4 className="nav-link" aria-current="page">HSA</h4>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Create Post</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/read" className="nav-link" >
                                    All Post ({allUsers.length})
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search"
                            
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nevbar