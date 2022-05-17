import React, {useContext} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {BsStar, BsStarFill} from "react-icons/bs";
import useFetch from "../customHook/useFetch";
import Context from "../context/Context";
import {CartContext} from "../context/CartContext";

const Product = () => {
   const {cartProduct, cartShow,setCartShow,setCartProduct,searchTerm} = useContext(CartContext)
   const handleAddToCart = (cartItem) => {
      setCartShow(true)
      cartItem.qty =1;
      setCartProduct([...cartProduct, cartItem])
   }

   let  {data, isLoading, error} = useFetch(
       "https://fakestoreapi.com/products"
   )
   /*if (data !== null) {
      const performSearch = () => {
          return data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      data                = performSearch();
  }*/
   const loadingMsg = <p className='text-center'>Loading...</p>;
   const errorMsg   = <p className='text-center'>{error}</p>

   return (
       <div className={`bg-light mt-3 py-5 ${cartShow && 'mb-260'} `} >
          <Container>
             <Row>
                {isLoading && loadingMsg}
                {error && errorMsg}
                {
                  data?.map(item => (<Col sm={6} md={4} lg={3} className='mb-4' key={item.id}>
                          <Card className={`h-100`}>
                             <div className='card-image position-relative overflow-hidden'>
                                <Card.Img variant="top" src={item.image}/>
                                <div className="d-flex justify-content-between gap-3 start-0 position-absolute w-100 add-price-btn">
                                   <Button className='w-100'
                                           variant="warning">${item.price}</Button>
                                   <Button
                                       className='w-100'
                                       variant="primary"
                                       disabled={cartProduct.find(cp => cp.id === item.id)}
                                       onClick={() => handleAddToCart(item)}>{cartProduct.find(cp => cp.id === item.id) ? 'Added To Cart' : 'Add To Cart'}
                                   </Button>
                                </div>
                             </div>
                             <Card.Body>
                                <div className="d-flex flex-column h-100">

                                   <div className='card-rating mb-2 d-flex align-items-center gap-2'>
                                      {
                                         [...Array(5)].map((each, index) => (
                                             index < Math.floor(item.rating.rate) ?
                                             <BsStarFill color='#ffc107' key={index}/> :
                                             <BsStar color='#000' key={index}/>
                                         ))
                                      }
                                      ( {Math.floor(item.rating.rate)} )
                                   </div>

                                   <div className='mb-3'>
                                      <Card.Title className='text-primary'>
                                         {item.title.length > 40
                                          ? `${item.title.slice(0, 40)} ... ` : item.title}
                                      </Card.Title>
                                      <Card.Text>
                                         {item.description.length > 100
                                             ? `${item.description.slice(0, 100)} ... ` : item.description}
                                      </Card.Text>
                                   </div>
                                   {/*<div className="d-flex justify-content-between h-100">
                                      <Button className='align-self-end'
                                              variant="warning">${item.price}</Button>
                                      <Button
                                          className='align-self-end'
                                          variant="primary"
                                          disabled={cartProduct.find(cp => cp.id === item.id)}
                                          onClick={() => handleAddToCart(item)}>{cartProduct.find(cp => cp.id === item.id) ? 'Added To Cart' : 'Add To Cart'}
                                      </Button>
                                   </div>*/}
                                </div>
                             </Card.Body>
                          </Card>
                       </Col>

                   ))
                }
             </Row>
          </Container>
       </div>
   );
};

export default Product;