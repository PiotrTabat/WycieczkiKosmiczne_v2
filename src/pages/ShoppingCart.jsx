import React from 'react'
import {motion} from 'framer-motion';
import ShoppingCartItems from "../components/ShoppingCartItems";


const ShoppingCart = ({selectedTours, setSelectedTours, selectedAccessories, setSelectedAccessories, selectedInsurances, setSelectedInsurances}) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <ShoppingCartItems selectedTours={selectedTours} setSelectedTours={setSelectedTours} selectedAccessories={selectedAccessories} setSelectedAccessories={setSelectedAccessories} selectedInsurances={selectedInsurances} setSelectedInsurances={setSelectedInsurances}/>
        </motion.div>
    )
}

export default ShoppingCart
