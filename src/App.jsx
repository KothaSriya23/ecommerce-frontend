import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Computers from './components/Computers';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
import Pendrives from './components/Pendrives';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Orders from './components/Orders';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 👇 Important: basename matches your Tomcat context path */}
      <BrowserRouter basename="/ecommerce-frontend">
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/pendrives" element={<Pendrives />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* E-commerce flow */}
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />

          {/* Catch-all fallback route (optional) */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
