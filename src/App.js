import {Route, Routes, useLocation} from "react-router-dom"
import Checkout                               from "./component/CheckOut";
import NavBar                                 from "./component/NavBar";
import React, {useEffect, useState}           from "react";
import Cart                                   from "./component/Cart";
import Product                                from "./component/Product";
import {Route, Routes, useLocation} from "react-router-dom"
import Checkout from "./component/CheckOut";
import NavBar from "./component/NavBar";
import React, {useContext, useEffect, useState} from "react";
import Cart from "./component/Cart";
import Product from "./component/Product";
import Context from "./context/Context"
import CartProvider, {CartContext} from "./context/CartContext";

function App() {

   /*const [cartShow, setCartShow]       = useState(false)
   const [cartProduct, setCartProduct] = useState([]);
   let location                        = useLocation();
   const [searchTerm, setSearchTerm] = useState('');

   const handleSearch = (value) => {
      setSearchTerm(value)
  }

   useEffect(() => {
      setCartShow(false)
   }, [location.pathname])
*/
   let location                        = useLocation();
   const {setCartShow} = useContext(CartContext)

   useEffect(() => {
      setCartShow(false)
   }, [location.pathname])

   return (

          <div className="App">
             <NavBar />

             <Routes>
                <Route
                    path='/'
                    element={<Product />}
                    // element={<Product setCartProduct={setCartProduct} searchTerm={searchTerm} />}
                />

                <Route path='/checkout' element={<Checkout />}/>
                {/*<Route path='/checkout' element={<Checkout setCartProduct={setCartProduct} />}/>*/}
             </Routes>

             <Cart />
             {/*<Cart setCartProduct={setCartProduct}/>*/}
          </div>

   );
}

export default App;
