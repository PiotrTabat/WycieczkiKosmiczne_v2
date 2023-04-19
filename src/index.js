import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import styled from 'styled-components';
import { CartProvider } from './components/CartContext';

const AppContainer = styled.div`
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContainer>
            <CartProvider>
            <App />
            </CartProvider>
        </AppContainer>
    </BrowserRouter>
);

