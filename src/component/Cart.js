import React, {useContext} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {IoIosCloseCircle, IoMdClose} from "react-icons/io";
import {BiUpArrow, BiDownArrow} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import useCart from "../hooks/useCart";
import {CartContext} from "../context/CartContext";

const Cart = () => {

   const {cartShow, setCartShow, cartProduct, setCartProduct}                                                                                                                                         = useContext(CartContext)
   const [totalPrice, setTotalPrice, discount, setDiscount, error, setError, errorShow, setErrorShow, handleRemoveCartItem, handleProductQtyIncrement, handleProductQtyDecrement, handleCouponSubmit] = useCart(cartProduct, setCartProduct, setCartShow)


   return (<div
           className={cartShow === false ? 'cart-section rounded border ' : 'cart-section rounded border cart-show'}>
          <IoIosCloseCircle onClick={() => setCartShow(false)}
                            type='button'
                            className='position-absolute fs-1 text-primary'
                            style={{top: '-15px', right: '-15px'}}
          />
          <Container fluid>
             <Row className='g-0'>
                <Col md={12}>
                   <Row className='my-2 gx-3'>
                      <Col md={10}>
                         <Row className='d-flex justify-content-center align-items-center h-100 max-h-220'>
                            {cartProduct.map(item => (<Col key={item.id} md={3} className='mb-3'>
                               <div
                                   className="d-flex align-items-center cart-product-list shadow-sm rounded p-3 position-relative"
                                   style={{backgroundColor: '#f8f9fa'}}
                               >
                                  <IoIosCloseCircle
                                      onClick={() => handleRemoveCartItem(item.id)}
                                      type='button'
                                      className='fs-5 position-absolute text-warning'
                                      style={{top: '15px', right: '15px'}}
                                  />
                                  <div className="product-img me-2">
                                     <img src={item.image} alt=""/>
                                  </div>
                                  <div className="product-info">
                                     <div className="p-name">
                                        {item.title.length > 20 ? `${item.title.slice(0, 20)} ... `
                                            : item.title}
                                     </div>

                                     <div className="align-items-center d-flex fw-bold p-price">
                                        <span>${item.price}</span>

                                        <span className='px-2'>
                                                        <IoMdClose/>
                                                    </span>

                                        <span> {item.qty}</span>

                                        <span className='d-inline-flex flex-column px-2'>
                                                        <span className='d-inline-flex flex-column px-2'>
                                                            <BiUpArrow
                                                                onClick={() => handleProductQtyIncrement(item.id)}
                                                                type='button'
                                                                className='text-warning'
                                                            />

                                                            <BiDownArrow
                                                                onClick={() => handleProductQtyDecrement(item.id)}
                                                                type='button'
                                                                className='text-warning'
                                                                disabled={item.qty < 2}
                                                            />
                                                        </span>
                                                    </span>
                                        <span className='ms-4'>
                                                        {(item.price * item.qty).toFixed(2)}
                                                    </span>
                                     </div>
                                  </div>
                               </div>
                            </Col>))}
                         </Row>
                      </Col>
                      <Col md={2}>
                         <div className="border fw-bold p-4 position-relative rounded">
                            <div className='position-absolute start-0 px-5 w-100' style={{top: '-20px'}}>
                               {/*<Form onSubmit={handleCouponSubmit}>*/}
                               {/*    <Form.Control name='coupon' type="text" autoComplete='off'*/}
                               {/*                  placeholder="Enter Coupon Here"/>*/}
                               {/*    /!*<Form.Text className={discount === 0 ? 'text-danger bg-light ' : 'text-success'}>*/}
                               {/*        {error}*/}
                               {/*    </Form.Text>*!/*/}
                               {/*</Form>*/}
                            </div>
                            <div className="position-relative overflow-hidden">
                               <div className="d-flex justify-content-between">
                                  <span>Sub Total:</span>
                                  <span> ${totalPrice.toFixed(2)} </span>
                               </div>
                               <div className="d-flex justify-content-between">
                                  <span>Discount:</span>
                                  <span className='text-danger'> ${discount}</span>
                               </div>
                               <hr/>
                               <div className="d-flex justify-content-between">
                                  <span>Total:</span>
                                  <span> ${(totalPrice - discount).toFixed(2)} {errorShow}</span>
                               </div>
                               <NavLink to='/checkout' className="btn btn-warning w-100 mt-3 checkout-section">
                                  Check out
                               </NavLink>

                               {/*coupon alert*/}
                               <Form.Text
                                   className={`
                                            bg-light form-text position-absolute py-3 start-0 text-center w-100 
                                            ${discount === 0 ? 'text-danger' : 'text-success'}
                                            ${errorShow === true ? 'bottom-0' : ''}
                                            
                                            `}
                                   style={{bottom: '-100px', transition: ' all .5s'}}
                               >
                                  {error}
                               </Form.Text>
                            </div>
                         </div>
                      </Col>
                   </Row>
                </Col>
             </Row>
          </Container>
       </div>

   );
};

export default Cart;