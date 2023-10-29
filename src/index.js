import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from 'styled-components';

const AppContainer = styled.div`
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContainer>
        <App />
    </AppContainer>
);
