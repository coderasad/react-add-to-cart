import React                              from 'react';
import {
    Button,
    Col,
    Container,
    FormControl,
    InputGroup,
    Nav,
    Navbar,
    OverlayTrigger,
    Row,
    Tooltip
}                                         from "react-bootstrap";
import {BsCartCheck, BsSearch, BsWallet2} from "react-icons/bs";
import {BiUser}                           from "react-icons/bi";
import {NavLink}                          from "react-router-dom";

const NavBar = ({cartShow, setCartShow, cartProduct}) => {

    return (
        <div className='header-section sticky-top py-3'>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar.Brand className='align-self-baseline d-flex p-0' as={NavLink} to="/">
                            <span
                                className="cs-h-50 bg-primary text-light px-2 d-flex align-items-center rounded">Blue</span>
                            <span className='align-items-center cs-h-50 d-flex text-primary'> Shop</span>
                        </Navbar.Brand>
                    </Col>

                    <Col>
                        <div className='d-flex justify-content-end gap-2'>
                            <div className='d-flex flex-column align-items-center d-none d-sm-block'>
                                <InputGroup className="header-icon cs-h-50 header-search">
                                    <FormControl
                                        placeholder="Search"
                                        className='cs-h-50'
                                    />
                                    <Button className='text-light header-icon cs-h-50' id="button-addon2">
                                        <BsSearch/>
                                    </Button>
                                </InputGroup>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <OverlayTrigger
                                    placement="left"
                                    overlay={<Tooltip id="button-tooltip-2">Profile</Tooltip>}
                                >
                                    {({ref, ...triggerHandler}) => (
                                        <Nav.Link
                                            {...triggerHandler}
                                            ref={ref}
                                            className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light'>
                                            <BiUser/>
                                        </Nav.Link>)}
                                </OverlayTrigger>

                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <OverlayTrigger
                                    placement="left"
                                    overlay={<Tooltip id="button-tooltip-2">Check out</Tooltip>}
                                >
                                    {({ref, ...triggerHandler}) => (
                                        <Nav.Link
                                            {...triggerHandler}
                                            ref={ref}
                                            as={NavLink} to='/checkout'
                                            className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light'>
                                            <BsWallet2/>
                                        </Nav.Link>)}
                                </OverlayTrigger>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <OverlayTrigger
                                    placement="left"
                                    overlay={<Tooltip id="button-tooltip-2">Cart</Tooltip>}
                                >
                                    {({ref, ...triggerHandler}) => (
                                        <Nav.Link
                                            {...triggerHandler}
                                            ref={ref}
                                            onClick={() => setCartShow(!cartShow)}
                                            className='align-items-center bg-primary d-flex header-icon cs-h-50 justify-content-center rounded text-light position-relative'>
                                            <BsCartCheck/>
                                            <span
                                                className="cart-pill position-absolute badge bg-danger">
                                               {cartProduct.length}
                                            </span>
                                        </Nav.Link>)}
                                </OverlayTrigger>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavBar;