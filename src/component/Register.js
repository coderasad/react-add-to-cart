import React, {useContext, useEffect, useState} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


const Register = () => {

    let navigate = useNavigate();
    const {
              user,
              setRegisterEmail,
              setRegisterPassword,
              register,
              regErrorMsg
          }      = useContext(AuthContext)

    const handleRegister = () => {
        register();

        if(regErrorMsg.email === ''){
            console.log('if')
            navigate('/');
        }else{
            console.log('else')
        }
    }


    useEffect(()=>{
        console.log(regErrorMsg.email, 'useEffect')
    },[])

    return (
        <div>
            <Container>
                <Row>
                    <Col className={'bg-light p-4 rounded'} md={{span: 4, offset: 4}}>
                        <div>
                            <h3>Registration </h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email"
                                                  placeholder="Enter email"
                                                  onChange={(event) => {
                                                      setRegisterEmail(event.target.value);
                                                  }
                                                  }
                                    />
                                    {regErrorMsg.email &&
                                        <Form.Text className="text-danger">
                                            {regErrorMsg.email}
                                        </Form.Text>
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                                  placeholder="Password"
                                                  onChange={(event) => {
                                                      setRegisterPassword(event.target.value);
                                                  }}
                                    />
                                </Form.Group>
                                <Button variant="primary" className='text-light' onClick={handleRegister}>
                                    Register
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register