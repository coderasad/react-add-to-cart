import React, {useEffect, useState} from 'react';

const UseCart = (cartProduct, setCartProduct,setCartShow) => {
   const [totalPrice, setTotalPrice] = useState(0)
   const [discount, setDiscount]     = useState(0)
   const [error, setError]           = useState('')
   const [errorShow, setErrorShow]           = useState(false)

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
      let couponValue = e.target.coupon.value;
      if (isNaN(couponValue))
      {
         alert("Must input numbers");
         return false;
      }
      if (couponValue > totalPrice) {
         setErrorShow(true)
         setDiscount(0);
         setError('Hey there 😎 Coupon is getting bigger than your prize?');

         setTimeout(function () {
            setErrorShow(false)
            e.target.coupon.value = ''
            // setError('');
         }, 3000)
      } else {
         setErrorShow(true)
         setDiscount(couponValue);
         setError('Hey there 😎 you are lucky!')
         setTimeout(function () {
            setErrorShow(false)
            e.target.coupon.value = ''
            // setError('');
         }, 3000)
      }
   }

   useEffect(() => {
      const subTotal = cartProduct.reduce((acc, cur) => acc + (cur.price * cur.qty), 0)
      setTotalPrice(subTotal);
      cartProduct.length < 1 && setDiscount(0);
   }, [cartProduct])
   return (
       [
          totalPrice, setTotalPrice,discount,setDiscount,error, setError,errorShow, setErrorShow,handleRemoveCartItem,handleProductQtyIncrement,handleProductQtyDecrement,handleCouponSubmit,
       ]
   );
};

export default UseCart;