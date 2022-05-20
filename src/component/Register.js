import React, {useContext, useEffect, useState} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import AuthContext from "../context/AuthContext";

/*import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
} from "firebase/auth";

import {auth} from "../firebase";*/

const Register = () => {

   const {user,logout,setRegisterEmail,setRegisterPassword,register,setLoginEmail,setLoginPassword,login} = useContext(AuthContext)

   /*const [registerEmail, setRegisterEmail]       = useState("");
   const [registerPassword, setRegisterPassword] = useState("");
   const [loginEmail, setLoginEmail]             = useState("");
   const [loginPassword, setLoginPassword]       = useState("");

   const [user, setUser] = useState({});
   console.log(user, 'user')

   onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   });

   const register = async () => {
      try {
         const user = await createUserWithEmailAndPassword(
             auth,
             registerEmail,
             registerPassword
         );
         console.log(user);
      } catch (error) {
         console.log(error.message);
      }
   };

   const login = async () => {
      try {
         const user = await signInWithEmailAndPassword(
             auth,
             loginEmail,
             loginPassword
         );
         console.log(user);
      } catch (error) {
         console.log(error.message);
      }
   };

   const logout = async () => {
      await signOut(auth);
   };*/

   return (
       <div>
          <Container>
             <Row>
                {user?.email ?
                    <Col className={'bg-light p-4 rounded'} md={{span: 4, offset: 4}}>
                       <div>
                          <h3> Register User </h3>
                             <Button onClick={logout}> Sign Out {user?.email}
                             </Button>
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
                                <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                                </Form.Text>
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
                             <Button variant="primary" onClick={register}>
                                Submit
                             </Button>
                          </Form>
                       </div>
                    </Col>
                    :
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
                                <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                                </Form.Text>
                             </Form.Group>

                             <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                              placeholder="Password"
                                              onChange={(event) => {
                                                 setLoginPassword(event.target.value);
                                              }}
                                />
                             </Form.Group>
                             <Button variant="primary" onClick={login}>
                                Submit
                             </Button>
                          </Form>
                       </div>
                    </Col>
                }
             </Row>
          </Container>
       </div>
   )
}

export default Register