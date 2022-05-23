import React, {useContext, useEffect, useState} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from 'react-router-dom';

const Login = () => {
   let navigate = useNavigate();
   const {
            setLoginEmail,
            setLoginPassword,
            login,
            regErrorMsg
         }      = useContext(AuthContext)

   const handleLogin = () => {
      regErrorMsg.email    = '';
      regErrorMsg.password = '';
      login();
      if (regErrorMsg?.email === '' && regErrorMsg?.password === '') {
         navigate('/');
      }else{
         console.log('error')
      }
   }


   return (
       <div>
          <Container>
             <Row>
                <Col className='bg-light p-4 rounded' md={{span: 4, offset: 4}}>
                   <div>
                      <h3> Login </h3>
                      <Form>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          placeholder="Enter email"
                                          onChange={(event) => {
                                             setLoginEmail(event.target.value);
                                          }
                                          }
                            />
                            {regErrorMsg.email &&
                                <Form.Text className="text-danger">
                                   {
                                      regErrorMsg.email
                                   }
                                </Form.Text>
                            }
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Password"
                                          onChange={(event) => {
                                             setLoginPassword(event.target.value);
                                          }}
                            />
                            {regErrorMsg.password &&
                                <Form.Text className="text-danger">
                                   {
                                      regErrorMsg.password
                                   }
                                </Form.Text>
                            }
                         </Form.Group>
                         <Button variant="primary" onClick={handleLogin}>
                            Login
                         </Button>
                      </Form>
                   </div>
                </Col>
             </Row>
          </Container>
       </div>
   )
}

export default Login