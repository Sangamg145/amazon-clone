import React from 'react';
import Header from './Header.js';
import Login from './Login.js'
import Returnp from './Return.js'
import Cart from './Cart.js'
import Home from './Home.js'
import Footer from './Footer.js'
import Payment from './Payment.js'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CheckOut from './CheckOut.js';


function App() {
  return (
<div className='cont'>
    <Router >
     <Header />
        <Switch>
        <Route path="/checkout">
          <CheckOut />
          </Route>
          <Route path="/return">
            <Returnp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/payment">
          <Payment />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
        <Footer />
        </Router>
        </div>
  );
}

export default App;