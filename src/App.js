import {Route, Routes, useLocation} from "react-router-dom"
import Checkout from "./component/CheckOut";
import NavBar from "./component/NavBar";
import React, {useContext, useEffect} from "react";
import Cart from "./component/Cart";
import Product from "./component/Product";
import Register from "./component/Register";
import {AuthContext} from "./context/AuthContext";
import {CartContext} from "./context/CartContext";
import Payment from "./component/Payment";
import Login from "./component/Login";
import PrivateOutlet from './component/PrivateOutlet'

function App() {

    let location           = useLocation();
    const {setCartShow}    = useContext(CartContext)
    const {setRegErrorMsg} = useContext(AuthContext)


    useEffect(() => {
        setCartShow(false)
        setRegErrorMsg(prevState => ({
            ...prevState,
            email   : '',
            password: ''
        }));

    }, [location.pathname])

    return (

        <div className="App">
            <NavBar/>

            <Routes>
                <Route path='/' element={<Product/>}/>
                <Route path='/signup' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/*' element={< PrivateOutlet/>}>
                    <Route path='payment' element={<Payment/>}/>
                    <Route path='checkout' element={<Checkout/>}/>
                </Route>
            </Routes>

            <Cart/>
        </div>

    );
}

export default App;
