import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './PageNotFound'

// admin pages
import Home from './Pages/Home';
import AddAbstract from './Pages/AddAbstract';
import SkillsCategory from './Pages/SkillsCategory';
import AddPortfolio from './Pages/AddPortfolio';
import AddClients from './Pages/AddClients';
import ManageContacts from './Pages/ManageContacts';
import ManageReviews from './Pages/ManageReviews';
import Login from './Login';
import Logout from './Pages/Logout';



export default function Layout() {
  return (
    <div>
        
        <Container fluid className='main_container'> 
            <Row>
                <Col className='col-md-3 text-white border-end border-1 '>
                    <div className="sidebar-brand d-flex align-items-center justify-content-center mt-3">
                        <h3 className="sidebar-brand-text mx-3">Portfolio <sup>Dashboard</sup></h3>
                    </div>
                    <Sidebar />
                    
                </Col>
                <Col className='col-md-9 text-white'>
                    <h3 className='mt-3'>Dashbord Admin Setting</h3>
                    <hr />
                    <div className='routs_pages'>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/AddAbstract' element={<AddAbstract/>} />
                        <Route path='/SkillsCategory' element={<SkillsCategory/>} />
                        <Route path='/AddPortfolio' element={<AddPortfolio/>} />
                        <Route path='/AddClients' element={<AddClients/>} />
                        <Route path='/ManageContacts' element={<ManageContacts/>} />
                        <Route path='/ManageReviews' element={<ManageReviews/>} />
                        <Route path='/Login' element={<Login />}/>
                        <Route path='/Logout' element={<Logout/>} />
                        
                        <Route path='/*' element={<PageNotFound/>}/>
                    </Routes>
                
                    <div className='bg-white w-25 h-25 p-2 text-dark' id='draggable'> draggable div</div>
                    <div className='bg-white w-25 h-25 p-2 text-dark' id='draggable'> draggable div</div>
                    <div className='bg-white w-25 h-25 p-2 text-dark' id='draggable'> draggable div</div>
                    <div className='bg-white w-25 h-25 p-2 text-dark' id='draggable'> draggable div</div>
                    <div className='bg-white w-25 h-25 p-2 text-dark' id='draggable'> draggable div</div>
                    <div className='bg-white w-25 h-25 p-2 text-dark' id='draggable'> draggable div</div>
                    <div className='bg-white w-25 h-25 p-2 text-dark' id='draggable'> draggable div</div>
                    </div>                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}
