import React, {lazy, Suspense} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import backgroundImage from '../assets/MainPage_rakieta.jpg';


const Wrapper = styled.div`
    padding-bottom: 2rem;
`;

const HomePageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


const HomePage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20rem 0 0 0;
  align-items: center;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  text-shadow: 0 0 10px #00a2ff;
`;

const StyledH1 = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 2rem 0;
  font-weight: 600;
  text-shadow: 0 0 10px #00a2ff;
`;

const MainPage = ({tours, accessories, insurances, handleClick}) => {
    const TourList = lazy(() => import('../components/TourList'));
    const AccessoryList = lazy(() => import('../components/AccessoryList'));
    const InsuranceList = lazy(() => import('../components/InsuranceList'));

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Wrapper>
                <HomePageWrapper>
                    <HomePage>
                        <h1>Witaj w naszym sklepie!</h1>
                        <p>Zapraszamy do zakupu wycieczek kosmicznych i akcesoriów</p>
                    </HomePage>
                </HomePageWrapper>
                <StyledH1 id="tours">Wycieczki kosmiczne</StyledH1>
                <Suspense fallback={<div>Ładowanie wycieczek...</div>}>
                    <TourList tours={tours} handleClick={handleClick}/>
                </Suspense>
                <StyledH1 id="accessories">Akcesoria</StyledH1>
                <Suspense fallback={<div>Ładowanie akcesoriów...</div>}>
                    <AccessoryList accessories={accessories} handleClick={handleClick}/>
                </Suspense>
                <StyledH1 id="insurances">Ubezpieczenia</StyledH1>
                <Suspense fallback={<div>Ładowanie ubezpieczeń...</div>}>
                    <InsuranceList insurances={insurances} handleClick={handleClick}/>
                </Suspense>
            </Wrapper>
        </motion.div>
    );
};

export default MainPage;
