import {Route, Routes, useLocation} from "react-router-dom"
import Checkout from "./component/CheckOut";
import NavBar from "./component/NavBar";
import React, {useContext, useEffect} from "react";
import Cart from "./component/Cart";
import Product from "./component/Product";
import Register from "./component/Register";
import {CartContext} from "./context/CartContext";


function App() {

   let location        = useLocation();
   const {setCartShow} = useContext(CartContext)

   useEffect(() => {
      setCartShow(false)
   }, [location.pathname])

   return (

       <div className="App">
          <NavBar/>

          <Routes>
             <Route path='/' element={<Product/>}/>
             <Route path='/signup' element={<Register/>}/>
             {/*<Route path='/signup' element={<Register/>} />*/}
             <Route path='/checkout' element={<Checkout/>}/>
          </Routes>

          <Cart/>
       </div>

   );
}

export default App;
