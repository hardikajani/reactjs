import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';
import axios from 'axios';

import { countryList } from '../constants';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        countryCode: '',
        mobileNumber: '',
        id: '',
        password: ''
    });
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        if (validate()) {
            const id = formData.id;
            fetch("http://localhost:5000/users/" + id).then((res) => {
                return res.json();
            }).then((resp) => {
                // console.log(resp)
                if (Object.keys(resp).length === 0) {
                    const usersData = JSON.stringify(formData);
                    const result = axios.post("http://localhost:5000/users", usersData,
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        navigate('/login');

                    alert('User added success');
                } else {
                    alert('user alredy....')
                }

            }).catch((err) => {
                alert('Login Failed due to..' + err.message)
            })
        }
    }
    const validate = () => {
        let result = true;
        const id = formData.id;
        const password = formData.password;
        if (id === '' || id === null) {
            result = false;
            alert('Please Enter username');
        }
        if (password === '' || password === null) {
            result = false;
            alert('Please Enter password');
        }
        return result;
    }
    return (
        <>
            <form className="container mt-3 mb-3" onSubmit={submitHandler}>
                <Row className="mb-3">
                    <Form.Group className="col col-sm-6">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" name="first_name" className="form-control" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" name="last_name" className="form-control" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                        <Form.Label>Mobile Number</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <select className="form-select" onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}>
                                    {
                                        countryList.sort((a, b) => (a.code3 > b.code3) ? 1 : -1).map((item) => (
                                            <option key={item.code} value={item.number}>{item.code3}</option>
                                        ))}
                                </select>

                            </InputGroup.Text>
                            <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} />
                        </InputGroup>
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email" onChange={(e) => setFormData({ ...formData, id: e.target.value })} />
                        </InputGroup>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control type="password" name="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                        </InputGroup>

                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                        <Button type="submit" className="me-4 btn btn-success btn-lg btn-block">Submit</Button>
                        <Button type="reset" className="me-4 btn btn-danger btn-lg btn-block">Cancel</Button>
                    </Form.Group>
                </Row>
            </form>
        </>
    )
}

export default Signup