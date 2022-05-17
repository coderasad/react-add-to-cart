import React, {createContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

export const CartContext = createContext();


const CartProvider = ({children}) => {
   const [cartShow, setCartShow]       = useState(false)
   const [cartProduct, setCartProduct] = useState([]);
   // let location                        = useLocation();
   const [searchTerm, setSearchTerm] = useState('');

   const handleSearch = (value) => {
      setSearchTerm(value)
   }

/*
   useEffect(() => {
      setCartShow(false)
   }, [location.pathname])
*/

   return (
       <CartContext.Provider value = {{cartShow,setCartShow,cartProduct,handleSearch,setCartProduct,searchTerm}}>
          {children}
       </CartContext.Provider>
   );
};

export default CartProvider;