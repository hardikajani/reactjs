import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row, Button, Toast } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, [])



    const submitHandler = async (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:5000/users/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                // console.log(resp)
                if (Object.keys(resp).length === 0) {
                    alert('Please enter valid username')
                } else {
                    if (resp.password === password) {
                        sessionStorage.setItem('token', username);
                        navigate('/');
                    } else {
                        alert('Please enter valid password')
                    }
                }
            }).catch((err) => {
                alert('Login Failed due to..' + err.message)
            })
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
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
        <div>
            <form className="container mt-3 mb-3" onSubmit={submitHandler}>
                <Row className="mb-3">
                    <Form.Group className="col col-sm-6">

                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </InputGroup>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </InputGroup>

                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                        <Button type="submit" className="me-4 btn btn-success btn-lg btn-block">Login</Button>
                        {/* <Button type="reset" className="me-4 btn btn-danger btn-lg btn-block">Cancel</Button> */}
                    </Form.Group>
                </Row>
            </form>
        </div>
    )
}

export default Login