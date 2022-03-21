import './App.css';
import Nav from './Components/Nav/Header';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/StateProvider';
import React, { useEffect } from 'react';
import { auth } from './Components/firebase';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders/Orders';

const promise = loadStripe(
  'pk_test_51KfXJvLi7qohJNwCE3mQ4JO8kbOwp3muLlBXCBqqHflsQDWuK8R97h4uPjDiPdmTizaCznV4gOFi7PXEyOAF5Y3I00JofdGLBP'
);

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={
          <><Elements stripe={promise}>
            <Payment />
          </Elements></>
        } />
      </Routes>
    </div>
  );
}

export default App;

//https://website-9e31f.web.app