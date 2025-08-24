import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';   // 👈 this is your main layout page
import AboutUs from './components/AboutUs';
import Computers from './components/Computers';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
import Pendrives from './components/Pendrives';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Orders from './components/Orders';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* basename must match Tomcat context */}
      <BrowserRouter basename="/ecommerce-frontend">
        <Routes>
          {/* Root should render HomePage (with sidebar, header, etc.) */}
          <Route path="/" element={<HomePage />}>
            <Route index element={<AboutUs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="computers" element={<Computers />} />
            <Route path="mobiles" element={<Mobiles />} />
            <Route path="laptops" element={<Laptops />} />
            <Route path="pendrives" element={<Pendrives />} />
            <Route path="productpage" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Fallback to HomePage */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
