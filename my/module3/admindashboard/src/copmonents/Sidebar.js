import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <div className='links'>
                        <ul>
                            <li className='mt-4'> <Link to='/'>Dashbord</Link></li>
                            <hr />
                            <li className='mt-4'> <Link to='/AddAbstract'>Add Abstract</Link></li>
                            <hr />
                            <li className='mt-4'> <Link to='/SkillsCategory'>Skills Category</Link></li>
                            <hr />
                            <li className='mt-4'> <Link to='/AddPortfolio'>Add Portfolio</Link></li>
                            <hr />

                            <li className='mt-4'> <Link to='/AddClients'>Add Clients</Link></li>
                            <hr />

                            <li className='mt-4'> <Link to='/ManageContacts'>Manage Contacts</Link></li>
                            <hr />

                            <li className='mt-4'> <Link to='/ManageReviews'>Manage Reviews</Link></li>
                            <hr />

                            <li className='mt-4'> <Link to='/Login'>Login</Link></li>
                            <hr />

                            <li className='mt-4'> <Link to='/Logout'>Logout</Link></li>
                            <hr />
                        </ul>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
