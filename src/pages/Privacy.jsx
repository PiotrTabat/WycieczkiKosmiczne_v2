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

const Privacy = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Title>Polityka prywatności</Title>
                <Wrapper>
                    <Subtitle>1. Wprowadzenie</Subtitle>
                    <Content>
                        Niniejsza polityka prywatności opisuje, jak T-BAT TOUR przetwarza dane osobowe użytkowników
                        serwisu internetowego. Zapewniamy poufność danych osobowych i stosujemy odpowiednie środki
                        techniczne i organizacyjne w celu ochrony danych.
                    </Content>
                    <Subtitle>2. Administrator danych</Subtitle>
                    <Content>
                        Administratorem danych osobowych jest Pjoter Holding Sp.z.o.o., ul. Kosmiczna 42, 00-001
                        Warszawa, Polska. W razie pytań dotyczących przetwarzania danych osobowych, prosimy o kontakt
                        pod adresem e-mail: kontakt@pjoter.t-bat.com.
                    </Content>
                    <Subtitle>3. Rodzaje zbieranych danych</Subtitle>
                    <Content>
                        <Content>
                            Zbieramy następujące dane osobowe użytkowników:
                        </Content>
                        <ul>
                            <li>Imię i nazwisko</li>
                            <li>Adres e-mail</li>
                            <li>Numer telefonu</li>
                            <li>Adres dostawy</li>
                            <li>Dane płatności</li>
                        </ul>
                    </Content>
                    <Subtitle>4. Cel przetwarzania danych</Subtitle>
                    <Content>
                        <Content>
                            Przetwarzamy dane osobowe użytkowników w celu:
                        </Content>
                        <ul>
                            <li>Realizacji umów zawartych z użytkownikami</li>
                            <li>Obsługi zapytań i skarg</li>
                            <li>Realizacji działań marketingowych</li>
                            <li>Udoskonalania usług i funkcjonalności serwisu</li>
                            <li>Analityki statystycznej</li>
                        </ul>
                    </Content>
                    <Subtitle>5. Podstawa prawna przetwarzania danych</Subtitle>
                    <Content>
                        Przetwarzanie danych osobowych jest zgodne z przepisami prawa, w tym z Rozporządzeniem
                        Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                        fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich
                        danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).
                    </Content>
                    <Subtitle>6. Udostępnianie danych osobowych</Subtitle>
                    <Content>
                        Dane osobowe użytkowników mogą być udostępniane podmiotom trzecim, takim jak dostawcy usług
                        płatności, firmy kurierskie, dostawcy usług IT, pod warunkiem że jest to niezbędne do
                        prawidłowej realizacji umów zawartych z użytkownikami lub w celu poprawy funkcjonowania serwisu.
                        Podmioty te przetwarzają dane osobowe jako podmioty przetwarzające na podstawie umów zawartych z
                        administratorem danych.
                    </Content>
                    <Subtitle>7. Prawa użytkowników</Subtitle>
                    <Content>
                        <Content>
                            Użytkownicy mają prawo do:
                        </Content>
                        <ul>
                            <li>Dostępu do swoich danych osobowych</li>
                            <li>Poprawiania swoich danych osobowych</li>
                            <li>Usunięcia swoich danych osobowych</li>
                            <li>Ograniczenia przetwarzania swoich danych osobowych</li>
                            <li>Wniesienia sprzeciwu wobec przetwarzania swoich danych osobowych</li>
                            <li>Przenoszenia swoich danych osobowych</li>
                            <li>Wniesienia skargi do organu nadzorczego</li>
                        </ul>
                    </Content>
                    <Content>
                        W celu realizacji swoich praw, prosimy o kontakt z administratorem danych.
                    </Content>

                    <Subtitle>8. Bezpieczeństwo danych osobowych</Subtitle>
                    <Content>
                        Administrator danych stosuje środki techniczne i organizacyjne mające na celu zapewnienie
                        ochrony danych osobowych. Wszystkie dane są przechowywane na serwerach zabezpieczonych przed
                        nieuprawnionym dostępem.
                    </Content>
                    <Subtitle>9. Zmiany polityki prywatności</Subtitle>
                    <Content>
                        Administrator danych zastrzega sobie prawo do wprowadzenia zmian w niniejszej polityce
                        prywatności. O wszelkich zmianach użytkownicy zostaną poinformowani na stronie internetowej.
                    </Content>
                </Wrapper>
            </Container>
        </motion.div>
    );
};

export default Privacy;
