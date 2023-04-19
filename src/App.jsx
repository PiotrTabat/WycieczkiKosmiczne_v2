import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { AnimatePresence } from 'framer-motion';
import MainPage from './pages/MainPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Tour from './pages/Tour';
import Accessory from './pages/Accessory';
import AboutUs from './pages/AboutUs';
import ShoppingCart from './pages/ShoppingCart';
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Regulations from "./pages/Regulations";
import Payments from "./pages/Payments";
import Delivery from "./pages/Delivery";
import Returns from "./pages/Returns";
import Insurance from "./pages/Insurance";
import LoginPage from './components/LoginPage';
import OrderPage from "./components/OrderPage";
import { CartProvider } from "./components/CartContext";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();

    return (
        <CartProvider>
            <div>
                <Navbar isOpen={isOpen} toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <AnimatePresence>
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/"
                            element={<MainPage />}
                        />
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
                        <Route path="login" element={<LoginPage />} />
                        <Route path="order" element={<OrderPage />} />
                    </Routes>
                </AnimatePresence>
                <RenderFooter />
            </div>
        </CartProvider>
    );
};

const RenderFooter = () => {
    const location = useLocation();
    const isShoppingCartPage = location.pathname === '/shopping-cart';
    const isContactPage = location.pathname === '/contact';
    const isAboutUsPage = location.pathname === '/about-us';

    return !isShoppingCartPage && !isContactPage && !isAboutUsPage ? <Footer /> : null;
};
export default App;
