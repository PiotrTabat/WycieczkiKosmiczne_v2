import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #111111b2;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
`;

const AboutUs = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
        <Container>
            <Wrapper>
                <Title>O nas</Title>
                <Content>
                    T-BAT TOUR to firma specjalizująca się w organizacji wycieczek w kosmos. Naszą misją jest otwarcie nowych horyzontów dla klientów, którzy pragną doświadczyć niesamowitych przygód w przestrzeni kosmicznej.
                    <br /><br />
                    Dzięki naszemu doświadczeniu w branży turystycznej oraz współpracy z ekspertami w dziedzinie kosmonautyki, oferujemy najwyższej jakości wycieczki i programy, które spełniają oczekiwania nawet najbardziej wymagających podróżników.
                    <br /><br />
                    Nasze wycieczki kosmiczne dostępne są w różnych opcjach i cenach, dzięki czemu każdy może znaleźć coś dla siebie. Bezpieczeństwo i komfort naszych klientów są dla nas priorytetem, dlatego pracujemy tylko z zaufanymi partnerami i wykorzystujemy sprawdzone technologie.
                    <br /><br />
                    Zapraszamy do odkrywania niesamowitych doświadczeń w przestrzeni kosmicznej razem z Ploter Holding Sp.z.o.o. T-BAT TOUR!
                </Content>
            </Wrapper>
        </Container>
        </motion.div>
    );
};

export default AboutUs;
