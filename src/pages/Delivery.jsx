import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #111111b2;
  width: 70%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 2rem 2rem;
  font-weight: 600;
  text-shadow: 0 0 10px #00a2ff;
`;

const Subtitle = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 1.5rem 0;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 2;
  text-align: justify;
  width: 90%;
  margin: 2rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Delivery = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Title>Dostawa w T-BAT TOUR</Title>
                <Wrapper>
                    <Subtitle>1. Sposoby dostawy</Subtitle>
                    <Content>
                        1.1. W T-BAT TOUR oferujemy następujące sposoby dostawy:<br/>
                        - Przesyłka elektroniczna<br/>
                        - Odbiór osobisty w siedzibie firmy<br/>
                        - Przesyłka kurierska<br/>
                        - Przesyłka pocztowa<br/>
                        1.2. Wybór sposobu dostawy odbywa się podczas składania zamówienia.
                    </Content>
                    <Subtitle>2. Czas dostawy</Subtitle>
                    <Content>
                        2.1. Czas dostawy zależy od wybranej opcji dostawy:<br/>
                        - Odbiór osobisty: natychmiast po potwierdzeniu zamówienia<br/>
                        - Przesyłka kurierska: zazwyczaj 1-3 dni robocze<br/>
                        - Przesyłka pocztowa: zazwyczaj 3-7 dni roboczych<br/>
                        2.2. Czas dostawy może ulec zmianie w zależności od dostępności produktu oraz aktualnej sytuacji
                        na rynku przewozowym.
                    </Content>
                    <Subtitle>3. Koszt dostawy</Subtitle>
                    <Content>
                        3.1. Koszt dostawy zależy od wybranej opcji dostawy oraz wagi i gabarytów przesyłki.<br/>
                        3.2. Koszt dostawy zostanie wyświetlony podczas składania zamówienia, przedpotwierdzeniem i
                        realizacją płatności. </Content>
                    <Subtitle>4. Śledzenie przesyłki</Subtitle>
                    <Content>
                        4.1. W przypadku przesyłek kurierskich i pocztowych, Klient otrzyma numer przesyłki do śledzenia
                        jej statusu online.<br/>
                        4.2. Informacje o statusie przesyłki będą dostępne na stronie internetowej wybranej firmy
                        kurierskiej lub Poczty Polskiej.
                    </Content>
                    <Subtitle>5. Odbiór osobisty</Subtitle>
                    <Content>
                        5.1. Odbiór osobisty jest możliwy w wybranych lokalizacjach T-BAT TOUR.<br/>
                        5.2. Klient zostanie poinformowany o gotowości zamówienia do odbioru oraz o adresie, na którym
                        można odebrać przesyłkę.
                    </Content>
                    <Subtitle>6. Reklamacje i zwroty</Subtitle>
                    <Content>
                        6.1. W przypadku problemów z dostawą, uszkodzeniem przesyłki lub niezgodności z zamówieniem,
                        Klient powinien zgłosić reklamację w ciągu 14 dni od otrzymania przesyłki.<br/>
                        6.2. Proces reklamacji oraz zwrotów opisany jest w sekcji "Reklamacje i zwroty" niniejszego
                        Regulaminu.
                    </Content>
                </Wrapper>
            </Container>
        </motion.div>
    );
};

export default Delivery;

