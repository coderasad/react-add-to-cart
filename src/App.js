import {Route, Routes, useLocation} from "react-router-dom"
import Checkout                               from "./component/CheckOut";
import NavBar                                 from "./component/NavBar";
import React, {useEffect, useState}           from "react";
import Cart                                   from "./component/Cart";
import Product                                from "./component/Product";

function App() {
    const [cartShow, setCartShow]       = useState(false)
    const [cartProduct, setCartProduct] = useState([]);
    let location                        = useLocation();

    useEffect(() => {
        setCartShow(false)
    }, [location.pathname])


    return (<div className="App">
        <NavBar cartShow={cartShow} setCartShow={setCartShow} cartProduct={cartProduct}/>

        <Routes>
            <Route path='/'
                   element={<Product cartProduct={cartProduct} setCartProduct={setCartProduct} setCartShow={setCartShow}
                                     cartShow={cartShow}/>}/>

            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>

        <Cart cartShow={cartShow} setCartShow={setCartShow} cartProduct={cartProduct}
              setCartProduct={setCartProduct}/>
    </div>);
}

export default App;
