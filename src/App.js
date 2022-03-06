import {Navigate, Route, Routes} from "react-router-dom"
import Main                      from "./component/Main";
import Checkout                  from "./component/CheckOut";
import NavBar                    from "./component/NavBar";
import React, {useState}         from "react";
import Cart                      from "./component/Cart";
import Product                   from "./component/Product";

function App() {
    const [cartShow, setCartShow]       = useState(false)
    const [cartProduct, setCartProduct] = useState([]);

    return (<div className="App">
            <NavBar cartShow={cartShow} setCartShow={setCartShow} cartProduct={cartProduct}/>

            <Routes>
                <Route path='/' element={<Product cartProduct={cartProduct} setCartProduct={setCartProduct} setCartShow={setCartShow} cartShow={cartShow} />}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Routes>

            <Cart cartShow={cartShow} setCartShow={setCartShow} cartProduct={cartProduct}
                  setCartProduct={setCartProduct}/>
        </div>);
}

export default App;
