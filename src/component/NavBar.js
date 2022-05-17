import React, {useContext} from 'react';
import { Button, Col, Container,Form, FormControl, InputGroup, Nav, Navbar, Row} from "react-bootstrap";
import {BsCartCheck, BsSearch, BsWallet2}                                         from "react-icons/bs";
import {BiUser}                                                                   from "react-icons/bi";
import {NavLink}                                                                  from "react-router-dom";
import Context from "../context/Context";
import {CartContext} from "../context/CartContext";


const NavBar = () => {
    const {cartShow,setCartShow,cartProduct, handleSearch} = useContext(CartContext);
    return (
        <div className='header-section sticky-top pt-3'>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Navbar.Brand className='align-self-baseline d-flex p-0' as={NavLink} to="/">
                            <span
                                className="cs-h-50 bg-primary text-light px-2 d-flex align-items-center rounded">Blue</span>
                            <span className='align-items-center cs-h-50 d-flex text-primary'> Shop</span>
                        </Navbar.Brand>
                    </Col>

                    <Col md={10}>
                        <Nav className='ms-auto d-flex justify-content-end gap-2'>
                            <div className='d-flex flex-column align-items-center'>
                            <Form>
                                    <InputGroup className="header-icon cs-h-50 header-search">
                                        <FormControl
                                            name='productName'
                                            placeholder="Search"
                                            className='cs-h-50'
                                            onChange={e=> handleSearch(e.target.value)}
                                        />
                                        <Button className='text-light header-icon cs-h-50 d-flex align-items-center justify-content-center' id="button-addon2">
                                            <BsSearch/>
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <Nav.Link
                                    className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light'>
                                    <BiUser/>
                                </Nav.Link>
                                Profile
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <Nav.Link as={NavLink} to='/checkout'
                                    className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light'>
                                    <BsWallet2/>
                                </Nav.Link>
                                Wallet
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <Nav.Link
                                    onClick={() => setCartShow(!cartShow)}
                                    className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light position-relative'>
                                    <BsCartCheck/>
                                    <span
                                        className="cart-pill position-absolute badge bg-danger">
                                       {cartProduct.length}
                                    </span>
                                </Nav.Link>
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