import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {AnimatePresence} from 'framer-motion';
import MainPage from './pages/MainPage';
import {Routes, Route, useLocation} from 'react-router-dom';
import Footer from './components/Footer';
import Tour from './pages/Tour';
import Accessory from './pages/Accessory';
import AboutUs from './pages/AboutUs';
import {Tours, Accessories, Insurances} from './data';
import ShoppingCart from './pages/ShoppingCart';
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Regulations from "./pages/Regulations";
import Payments from "./pages/Payments";
import Delivery from "./pages/Delivery";
import Returns from "./pages/Returns";
import Insurance from "./pages/Insurance";
import LoginPage from './components/LoginPage';


const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTours, setSelectedTours] = useState([]);
    const [selectedAccessories, setSelectedAccessories] = useState([]);
    const [selectedInsurances, setSelectedInsurances] = useState([]);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (id, type) => {
        if (type === 'tour') {
            const tour = Tours.find((tour) => tour.id === id);
            if (selectedTours.find((tour) => tour.id === id)) {
                setSelectedTours(
                    selectedTours.filter((tour) => tour.id !== id)
                );
            } else {
                setSelectedTours([...selectedTours, tour]);
            }
        } else if (type === 'accessory') {
            const accessory = Accessories.find((accessory) => accessory.id === id);
            if (selectedAccessories.find((accessory) => accessory.id === id)) {
                setSelectedAccessories(
                    selectedAccessories.filter((accessory) => accessory.id !== id)
                );
            } else {
                setSelectedAccessories([...selectedAccessories, accessory]);
            }
        } else if (type === 'insurance') {
            const insurance = Insurances.find((insurance) => insurance.id === id);
            if (selectedInsurances.find((insurance) => insurance.id === id)) {
                setSelectedInsurances(
                    selectedInsurances.filter((insurance) => insurance.id !== id)
                );
            } else {
                setSelectedInsurances([...selectedInsurances, insurance]);
            }
        }
    }

    const location = useLocation();

    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <MainPage
                                tours={Tours}
                                accessories={Accessories}
                                insurances={Insurances}
                                handleClick={handleClick}
                            />
                        }
                    />
                    <Route path="tour/:id" element={<Tour/>}/>
                    <Route path="/accessory/:id" element={<Accessory/>}/>
                    <Route path="/insurance/:id" element={<Insurance/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route
                        path="/shopping-cart"
                        element={
                            <ShoppingCart
                                selectedTours={selectedTours}
                                setSelectedTours={setSelectedTours}
                                selectedAccessories={selectedAccessories}
                                setSelectedAccessories={setSelectedAccessories}
                                selectedInsurances={selectedInsurances}
                                setSelectedInsurances={setSelectedInsurances}
                            />
                        }
                    />
                    <Route path="/shopping-cart" exact component={ShoppingCart}/>
                    <Route path="about-us" element={<AboutUs/>}/>
                    <Route path="privacy" element={<Privacy/>}/>
                    <Route path="regulations" element={<Regulations/>}/>
                    <Route path="payments" element={<Payments/>}/>
                    <Route path="delivery" element={<Delivery/>}/>
                    <Route path="returns" element={<Returns/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                </Routes>
            </AnimatePresence>
            <RenderFooter/>
        </div>
    );
};

const RenderFooter = () => {
    const location = useLocation();
    const isShoppingCartPage = location.pathname === '/shopping-cart';
    const isContactPage = location.pathname === '/contact';
    const isAboutUsPage = location.pathname === '/about-us';

    return !isShoppingCartPage && !isContactPage && !isAboutUsPage ? <Footer/> : null;
};
export default App;
