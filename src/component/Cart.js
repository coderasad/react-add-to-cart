import React, {useEffect, useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {IoIosCloseCircle, IoMdClose} from "react-icons/io";
import {BiUpArrow, BiDownArrow} from "react-icons/bi";

const Cart = ({cartShow, setCartShow, cartProduct, setCartProduct}) => {

   const [totalPrice, setTotalPrice] = useState(0)
   const [discount, setDiscount]     = useState(0)

   const handleRemoveCartItem = (index) => {
      const newCart = cartProduct.filter(cp => cp.id !== index)
      setCartProduct([...newCart])
      if (newCart.length < 1) {
         setCartShow(false)
      }
   }

   const handleProductQtyIncrement = (id) => {
      const newCartItem = cartProduct.find(data => data.id === id);
      newCartItem.qty += 1;
      setCartProduct([...cartProduct], newCartItem)
   }

   const handleProductQtyDecrement = (id) => {
      const newCartItem = cartProduct.find(data => data.id === id);
      if (newCartItem.qty > 1) {
         newCartItem.qty -= 1;
         setCartProduct([...cartProduct], newCartItem)
      }
   }

   const handleCouponSubmit = (e) => {
      e.preventDefault()
      const coupon = null;
      console.log('handleCouponSubmit')
   }

   useEffect(() => {
      console.log(cartProduct, 'cartProduct')
      const subTotal = cartProduct.reduce((acc, cur) => acc + (cur.price * cur.qty), 0)
      setTotalPrice(subTotal);

   }, [cartProduct])

   return (
       <div
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
                         <Row className='d-flex justify-content-center max-h-220'>
                            {
                               cartProduct.map(item => (
                                   <Col key={item.id} md={3} className='mb-3'>
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
                                               {item.title.length > 25
                                                   ? `${item.title.slice(0, 25)} ... ` : item.title}
                                            </div>

                                            <div className="align-items-center d-flex fw-bold p-price">
                                               <span>${item.price}</span>

                                               <span className='px-2'>
                                                        <IoMdClose/>
                                         </span>

                                               <span> {item.qty}</span>
                                               <span className='d-inline-flex flex-column px-2'>
                                            <span className='d-inline-flex flex-column px-2'>
                                               <BiUpArrow onClick={() => handleProductQtyIncrement(item.id)}
                                                          type='button'
                                                          className='text-warning'
                                               />

                                               <BiDownArrow onClick={() => handleProductQtyDecrement(item.id)}
                                                            type='button'
                                                            className='text-warning'
                                                            disabled={item.qty < 2}
                                               />
                                            </span>
                                         </span>
                                               <span className='ms-4'>{(item.price * item.qty).toFixed(2)}</span>
                                            </div>
                                         </div>
                                      </div>
                                   </Col>
                               ))
                            }
                         </Row>
                      </Col>
                      <Col md={2}>
                         <div className="border rounded p-4 fw-bold">
                            <div className='mb-3'>
                               <Form onSubmit={handleCouponSubmit}>
                                  <Form.Control name='coupon' type="text" placeholder="Enter Coupon Here" />
                               </Form>
                            </div>
                            <div className="d-flex justify-content-between">
                               <span>Total Price:</span>
                               <span> ${totalPrice.toFixed(2)} </span>
                            </div>
                            <div className="d-flex justify-content-between">
                               <span>Discount:</span>
                               <span className='text-danger'> ${discount}</span>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between">
                               <span>Total:</span>
                               <span> ${(totalPrice - discount).toFixed(2)}</span>
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