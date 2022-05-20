import React, {createContext, useState} from 'react';

export const CartContext = createContext();


const CartProvider = ({children}) => {
   const [cartShow, setCartShow]       = useState(false)
   const [cartProduct, setCartProduct] = useState([]);
   const [searchTerm, setSearchTerm]   = useState('');

   const handleSearch = (value) => {
      setSearchTerm(value)
   }

   return (
       <CartContext.Provider value={{cartShow, setCartShow, cartProduct, handleSearch, setCartProduct, searchTerm}}>
          {children}
       </CartContext.Provider>
   );
};

export default CartProvider;