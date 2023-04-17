import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const Returns = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <Container>
                <Title>Zwroty w T-BAT TOUR</Title>
                <Wrapper>
                    <Subtitle>1. Odstąpienie od umowy</Subtitle>
                    <Content>
                        1.1. Klient ma prawo odstąpić od umowy zawartej z T-BAT TOUR w ciągu 14 dni od otrzymania przesyłki bez podania przyczyny.<br />
                        1.2. Aby skorzystać z prawa do odstąpienia od umowy, Klient musi poinformować T-BAT TOUR o swojej decyzji w sposób jednoznaczny (np. poprzez e-mail).<br />
                        1.3. Termin 14-dniowy na odstąpienie od umowy jest zachowany, jeśli Klient wyśle informację przed jego upływem.
                    </Content>
                    <Subtitle>2. Zasady zwrotów</Subtitle>
                    <Content>
                        2.1. W przypadku odstąpienia od umowy, T-BAT TOUR zwróci Klientowi wszystkie otrzymane płatności, w tym koszty dostawy (z wyjątkiem dodatkowych kosztów wynikających z wyboru przez Klienta sposobu dostawy innego niż najtańszy oferowany przez T-BAT TOUR), niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia otrzymania informacji o odstąpieniu od umowy.<br />
                        2.2. Zwrot płatności zostanie przeprowadzony przy użyciu takich samych środków płatniczych, jakie zostały użyte przez Klienta w pierwotnej transakcji, chyba że Klient wyraźnie zgodzi się na inne rozwiązanie. W każdym przypadku Klient nie poniesie żadnych opłat w związku z tym zwrotem.<br />
                        2.3. T-BAT TOUR może wstrzymać się ze zwrotem płatności do czasu otrzymania przesyłki zwracanej przez Klienta lub do czasu dostarczenia przez Klienta dowodu jej wysyłki, w zależności od tego, które zdarzenie nastąpi wcześniej.
                    </Content>
                    <Subtitle>3. Zwrot przesyłki</Subtitle>
                    <Content>
                        3.1. Klient zobowiązany jest do odesłania lub przekazania przesyłki T-BAT TOUR niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia, w którym poinformował T-BAT TOUR o odstąpieniu od umowy.<br />
                        3.2. Termin jest zachowany, jeśli Klient odeśle przesyłkę przed upływem 14-dniowego terminu.<br />
                        3.3. Klient ponosi bezpośrednie koszty zwrotu przesyłki.
                    </Content>
                    <Subtitle>4. Odpowiedzialność za zmniejszenie wartości przedmiotu umowy</Subtitle>
                    <Content>
                        4.1. Klient jest odpowiedzialny tylko za zmniejszenie wartości przedmiotu umowy wynikające z korzystania z niego w sposób inny niż było to konieczne do stwierdzenia charakteru, cech i funkcjonowania przedmiotu.<br />
                        4.2. W przypadku, gdy zmniejszenie wartości przedmiotu umowy jest wynikiem nieodpowiedniego użytkowania przez Klienta, T-BAT TOUR może odmówić zwrotu pełnej kwoty.
                    </Content>
                    <Subtitle>5. Reklamacje</Subtitle>
                    <Content>
                        5.1. W przypadku reklamacji dotyczących uszkodzonego lub niezgodnego z zamówieniem przedmiotu, Klient powinien zgłosić reklamację w ciągu 14 dni od otrzymania przesyłki.<br />
                        5.2. T-BAT TOUR rozpatrzy zgłoszone reklamacje i informuje Klienta o wyniku reklamacji w ciągu 14 dni od otrzymania zgłoszenia.<br />
                        5.3. W przypadku uznania reklamacji, T-BAT TOUR zwróci Klientowi pełną wartość przedmiotu lub zaoferuje wymianę na nowy produkt, w zależności od życzenia Klienta.
                    </Content>
                </Wrapper>
            </Container>
        </motion.div>
    );
};

export default Returns;
