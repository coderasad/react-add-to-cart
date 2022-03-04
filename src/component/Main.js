import React, {useState} from 'react';
import NavBar from "./NavBar";
import Product from "./Product";
import Cart from "./Cart";

const Main = () => {

    const [cartShow,setCartShow] = useState(false)
    const [cartProduct, setCartProduct] = useState([]);
    // console.log(cartProduct)

    return (
        <>
            <NavBar cartShow={cartShow} setCartShow={setCartShow} cartProduct={cartProduct} />
            <Product cartProduct={cartProduct} setCartProduct={setCartProduct} setCartShow={setCartShow} />
            <Cart cartShow={cartShow} setCartShow={setCartShow} cartProduct={cartProduct} setCartProduct={setCartProduct}/>
        </>
    );
};

export default Main;