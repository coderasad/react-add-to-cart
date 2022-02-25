import React from 'react';
import {Button, Col, Container, FormControl, InputGroup, Nav, Navbar, Row} from "react-bootstrap";
import {BsCartCheck, BsSearch, BsWallet2} from "react-icons/bs";
import {BiUser} from "react-icons/bi";

const NavBar = () => {
    return (
        <div className='header-section'>
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <Navbar.Brand className='align-self-baseline d-flex' href="#home">
                                <span
                                    className="cs-h-50 bg-primary text-light px-2 d-flex align-items-center rounded">Blue</span>
                                <span className='align-items-center cs-h-50 d-flex text-primary'> Shop</span>
                            </Navbar.Brand>
                        </Col>


                        <Col md={9}>
                            <Nav className='ms-auto d-flex gap-2'>
                                <div className='d-flex flex-column align-items-center'>
                                    <InputGroup className="header-icon cs-h-50 header-search">
                                        <FormControl
                                            placeholder="Search"
                                        />
                                        <Button className='text-light' id="button-addon2">
                                            <BsSearch/>
                                        </Button>
                                    </InputGroup>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    <Nav.Link
                                        className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light'>
                                        <BiUser/></Nav.Link>
                                    Profile
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    <Nav.Link
                                        className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light'>
                                        <BsWallet2/></Nav.Link>
                                    Wallet
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    <Nav.Link
                                        className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light'>
                                        <BsCartCheck/></Nav.Link>
                                    Cart
                                </div>
                            </Nav>
                        </Col>

                    </Row>
                </Container>
        </div>
    );
};

export default NavBar;