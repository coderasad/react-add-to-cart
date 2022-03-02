import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {IoIosCloseCircle, IoMdClose} from "react-icons/io";

const Cart = ({cartShow, setCartShow,cartProduct, setCartProduct }) => {
    return (
        <div className={ cartShow === false ? 'cart-section shadow-sm rounded' : 'cart-section shadow-sm rounded cart-show'}>
            <IoIosCloseCircle  onClick={()=> setCartShow(false)} type='button' className='float-end fs-1 me-3 mt-3 text-primary' />
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Row className='my-2'>
                            {
                                cartProduct.map(item => (
                                    <Col key={item.id} md={4}>
                                        <div className="d-flex cart-product-list shadow rounded m-3 py-3">
                                            <div className="product-img">
                                                <img src={item.image} alt=""/>
                                            </div>
                                            <div className="product-info">
                                                <div className="p-name">
                                                    {item.title}
                                                </div>
                                                <div className="p-name fw-bold">
                                                    <span>${item.price}</span>
                                                    <span className='px-2'>
                                                        <IoMdClose/>
                                                    </span>
                                                    <span> Qty: {`2`}</span>
                                                    <span className='ms-4'>Total: $120</span>
                                                </div>
                                                <div className="p-name">

                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Cart;