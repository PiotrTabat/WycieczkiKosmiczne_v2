import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import Tour from './pages/Tour';
import Accessory from './pages/Accessory';
import AboutUs from './pages/AboutUs';
import ShoppingCart from './pages/ShoppingCart';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Regulations from './pages/Regulations';
import Payments from './pages/Payments';
import Delivery from './pages/Delivery';
import Returns from './pages/Returns';
import Insurance from './pages/Insurance';
import LoginToOrder from './components/LoginToOrder';
import OrderPage from './components/OrderPage';
import { CartProvider } from './components/CartContext';
import LoginToUser from './components/LoginToUser';
import Register from './components/Register';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <CartProvider>
            <Router basename="/wycieczki-kosmiczne">
                <div>
                    <Navbar isOpen={isOpen} toggle={toggle} />
                    <Sidebar isOpen={isOpen} toggle={toggle} />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="tour/:id" element={<Tour />} />
                        <Route path="/accessory/:id" element={<Accessory />} />
                        <Route path="/insurance/:id" element={<Insurance />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/shopping-cart" element={<ShoppingCart />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="privacy" element={<Privacy />} />
                        <Route path="regulations" element={<Regulations />} />
                        <Route path="payments" element={<Payments />} />
                        <Route path="delivery" element={<Delivery />} />
                        <Route path="returns" element={<Returns />} />
                        <Route path="login-to-order" element={<LoginToOrder />} />
                        <Route path="login-to-user" element={<LoginToUser />} />
                        <Route path="order" element={<OrderPage />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
