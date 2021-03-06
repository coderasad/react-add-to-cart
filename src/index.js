import React           from 'react';
import ReactDOM        from 'react-dom';
import './App.scss';
import App             from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";
// import "~bootstrap/scss/bootstrap";

ReactDOM.render(
    <BrowserRouter>
       <AuthProvider>
          <CartProvider>
             <App/>
          </CartProvider>
       </AuthProvider>

    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
