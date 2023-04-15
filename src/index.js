import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin-top: 8rem;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContainer>
            <App />
        </AppContainer>
    </BrowserRouter>
);

