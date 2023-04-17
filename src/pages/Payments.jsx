import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { FaPaypal, FaCreditCard, FaApplePay, FaGooglePay, FaPiggyBank } from 'react-icons/fa'



const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
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
const PayIcon = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: 2rem 0;
    font-size: 2rem;
`;

const Payments = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Title>Płatności w T-BAT TOUR</Title>
                <Wrapper>
                    <Subtitle>1. Metody płatności</Subtitle>
                    <PayIcon>
                        <FaCreditCard fontSize={50}/>
                        <FaPiggyBank fontSize={50}/>
                        <FaPaypal fontSize={50}/>
                        <FaApplePay fontSize={50}/>
                        <FaGooglePay fontSize={50}/>
                    </PayIcon>
                    <Content>
                        1.1. W T-BAT TOUR akceptujemy następujące metody płatności:<br/>
                        - Gotówka<br/>
                        - Karta kredytowa/debetowa (Visa, Mastercard, American Express)<br/>
                        - Przelew bankowy<br/>
                        - PayPal<br/>
                        - Apple Pay<br/>
                        - Google Pay<br/>

                        1.2. Wszystkie płatności są przetwarzane przez naszych zaufanych partnerów płatnościowych,
                        którzy gwarantują bezpieczeństwo i poufność danych transakcji.
                    </Content>
                    <Subtitle>2. Waluta</Subtitle>
                    <Content>
                        2.1. Wszystkie ceny na stronie T-BAT TOUR są podane w walucie lokalnej, tj. polskich złotych
                        (PLN).<br/>
                        2.2. W przypadku płatności dokonywanych za granicą, kwota zostanie przeliczona na walutę lokalną
                        klienta według aktualnego kursu wymiany walut.
                    </Content>
                    <Subtitle>3. Czas realizacji płatności</Subtitle>
                    <Content>
                        3.1. Płatności kartą kredytową/debetową oraz PayPal są zazwyczaj realizowane natychmiast.<br/>
                        3.2. W przypadku przelewu bankowego czas realizacji płatności może wynosić od 1 do 3 dni
                        roboczych, w zależności od banku i kraju.<br/>
                        3.3. Po zaksięgowaniu płatności, Klient otrzyma potwierdzenie płatności drogą elektroniczną
                        (e-mail).
                    </Content>
                    <Subtitle>4. Faktury</Subtitle>
                    <Content>
                        4.1. Na życzenie Klienta, T-BAT TOUR może wystawić fakturę VAT za zakupione wycieczki kosmiczne.<br/>
                        4.2. Aby otrzymać fakturę VAT, Klient powinien podać wszystkie wymagane dane podatkowe podczas
                        procesu zakupu lub poprzez kontakt z obsługą klienta T-BAT TOUR na adres e-mail: info@t-bat.com.
                    </Content>
                    <Subtitle>5. Zwroty i anulacje</Subtitle>
                    <Content>
                        5.1. W przypadku anulowania rezerwacji lub odstąpienia od umowy przez Klienta, zwrot płatności
                        zostanie przeprowadzony w sposób opisany w sekcji "Odstąpienie od umowy" niniejszego Regulaminu.<br/>
                        5.2. Jeżeli zwrot płatności zostanie zatwierdzony, środki zostaną zwrócone na rachunek bankowy
                        lub kartę kredytową/debetową, z której została dokonana pierwotna płatność. W przypadku
                        płatności za pomocą PayPal, środki zostaną zwrócone na konto PayPal Klienta.
                    </Content>
                </Wrapper>
            </Container>
        </motion.div>
    );
};

export default Payments;
