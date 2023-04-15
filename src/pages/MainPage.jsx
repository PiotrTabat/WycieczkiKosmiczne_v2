import React from 'react';
import {motion} from 'framer-motion';
import TourList from '../components/TourList';
import AccessoryList from '../components/AccessoryList';
import styled from 'styled-components';
import backgroundImage from '../assets/7-2.jpg';

const Wrapper = styled.div`
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
  padding: 12rem 0 0 0;
  align-items: center;
  margin-top: 8rem;
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

const MainPage = ({tours, accessories, handleClick}) => {
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
                <StyledH1>Wycieczki kosmiczne</StyledH1>
                <TourList tours={tours} handleClick={handleClick} />
                <StyledH1>Akcesoria</StyledH1>
                <AccessoryList accessories={accessories} handleClick={handleClick} />

            </Wrapper>
        </motion.div>
    );
};

export default MainPage;
