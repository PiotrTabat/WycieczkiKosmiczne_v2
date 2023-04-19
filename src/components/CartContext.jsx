import React, {createContext, useContext, useState} from 'react';
import {Products} from '../data';


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [selectedTours, setSelectedTours] = useState([]);
    const [selectedAccessories, setSelectedAccessories] = useState([]);
    const [selectedInsurances, setSelectedInsurances] = useState([]);

    const handleClick = (event, id) => {
        event.preventDefault();
        const item = Products.find((item) => item.id === id);
        const currentItems = selectedTours.filter((tour) => tour.id !== id);
        if (currentItems.length < selectedTours.length) {
            item.quantity = 1;
        } else {
            item.quantity = (item.quantity || 0) + 1;
        }
        setSelectedTours([...currentItems, item]);
    };
    const getTotalPrice = () => {
        return (
            selectedTours.reduce((total, tour) => total + tour.quantity * tour.price, 0) +
            selectedAccessories.reduce((total, accessory) => total + accessory.quantity * accessory.price, 0) +
            selectedInsurances.reduce((total, insurance) => total + insurance.quantity * insurance.price, 0)
        );
    };

    const getTotalQuantity = () => {
        return (
            selectedTours.reduce((total, tour) => total + tour.quantity, 0) +
            selectedAccessories.reduce((total, accessory) => total + accessory.quantity, 0) +
            selectedInsurances.reduce((total, insurance) => total + insurance.quantity, 0)
        );
    };

    const updateItemQuantity = (id, delta) => {
        const update = (items, setSelected) => {
            const index = items.findIndex((item) => item.id === id);
            if (index > -1) {
                const updatedItems = [...items];
                updatedItems[index] = {
                    ...updatedItems[index],
                    quantity: Math.max(updatedItems[index].quantity + delta, 0),
                };
                setSelected(
                    updatedItems.filter((item) => item.quantity > 0)
                );
            }
        };

        const productType = selectedTours.find((tour) => tour.id === id)
            ? 'tour'
            : selectedAccessories.find((accessory) => accessory.id === id)
                ? 'accessory'
                : 'insurance';

        if (productType === 'tour') update(selectedTours, setSelectedTours);
        else if (productType === 'accessory') update(selectedAccessories, setSelectedAccessories);
        else if (productType === 'insurance') update(selectedInsurances, setSelectedInsurances);
    };


    const incrementItem = (id) => updateItemQuantity(id, 1);
    const decrementItem = (id) => updateItemQuantity(id, -1);

    const addToCart = (product, quantity) => {
        const {id, type} = product;

        const update = (items, setSelected) => {
            const index = items.findIndex((item) => item.id === id);
            if (index > -1) {
                const updatedItems = [...items];
                updatedItems[index] = {...updatedItems[index], quantity: updatedItems[index].quantity + quantity};
                setSelected(updatedItems);
            } else {
                setSelected((prevState) => [...prevState, {...product, quantity}]);
            }
        };

        if (type === 'tour') update(selectedTours, setSelectedTours);
        else if (type === 'accessory') update(selectedAccessories, setSelectedAccessories);
        else if (type === 'insurance') update(selectedInsurances, setSelectedInsurances);
    };

    return (
        <CartContext.Provider
            value={{
                selectedTours,
                setSelectedTours,
                selectedAccessories,
                setSelectedAccessories,
                selectedInsurances,
                setSelectedInsurances,
                getTotalQuantity,
                addToCart,
                getTotalPrice,
                incrementItem,
                decrementItem,
                handleClick,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export {CartProvider, useCart};