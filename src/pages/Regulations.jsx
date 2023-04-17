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
const Terms = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Title>Regulamin T-BAT TOUR</Title>
                <Wrapper>
                    <Subtitle>1. Definicje</Subtitle>
                    <Content>
                        1.1. T-BAT TOUR – nazwa sklepu internetowego oferującego wycieczki kosmiczne.<br />
                        1.2. Klient – osoba fizyczna, która dokonuje rezerwacji i/lub zakupu wycieczki kosmicznej<br/>
                        w sklepie T-BAT TOUR.<br />
                        1.3. Regulamin – niniejszy dokument określający zasady funkcjonowania sklepu internetowego T-BAT TOUR.
                    </Content>
                    <Subtitle>2. Rezerwacja i zakup wycieczki</Subtitle>
                    <Content>
                        2.1. Klient dokonuje rezerwacji wycieczki kosmicznej poprzez wybór oferty na stronie internetowej T-BAT TOUR i wypełnienie formularza rezerwacyjnego.<br />
                        2.2. Klient dokonuje zakupu wycieczki kosmicznej poprzez opłacenie kwoty wynikającej z rezerwacji.<br />
                        2.3. Rezerwacja wycieczki jest ważna przez 72 godziny od momentu jej dokonania. Jeżeli w tym czasie Klient nie opłaci rezerwacji, zostaje ona anulowana.<br />
                        2.4. Po opłaceniu rezerwacji, Klient otrzymuje potwierdzenie zakupu w formie e-maila.
                    </Content>
                    <Subtitle>3. Odstąpienie od umowy</Subtitle>
                    <Content>
                        3.1. Klient ma prawo do odstąpienia od umowy bez podania przyczyny w ciągu 14 dni od daty zawarcia umowy.<br />
                        3.2. Aby skorzystać z prawa do odstąpienia od umowy, klient musi poinformować T-BAT TOUR o swojej decyzji, wysyłając jednoznaczne oświadczenie (np. list, faks lub e-mail) na adres podany w sekcji "Administrator danych" w Polityce Prywatności.<br />
                        3.3. W przypadku odstąpienia od umowy, klient otrzyma zwrot wszystkich wpłaconych środków, w tym kosztów dostarczenia towaru (z wyjątkiem dodatkowych kosztów wynikających z wyboru sposobu dostarczenia innego niż najtańszy zwykły sposób dostarczenia oferowany przez T-BAT TOUR), niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia, w którym T-BAT TOUR zostało poinformowane o decyzji klienta o wykonaniu prawa odstania od umowy.<br />
                        3.4. T-BAT TOUR dokona zwrotu płatności przy użyciu takich samych sposobów płatności, jakie zostały użyte przez klienta w pierwotnej transakcji, chyba że klient wyraźnie zgodził się na inne rozwiązanie; w każdym przypadku klient nie poniesie żadnych opłat w związku z tym zwrotem.<br />
                        3.5. Jeżeli klient wybrał wycieczkę, której świadczenie rozpoczęło się przed upływem terminu do odstąpienia od umowy, klient jest zobowiązany do zapłaty za świadczenia, które zostały wykonane do czasu, kiedy klient poinformował T-BAT TOUR o wykonaniu prawa odstąpienia od umowy, proporcjonalnie do zakresu świadczeń.<br />
                        3.6. Klient ponosi bezpośrednie koszty zwrotu towarów w przypadku odstąpienia od umowy.<br />
                        3.7. Klient ponosi odpowiedzialność za zmniejszenie wartości towaru będące wynikiem korzystania z niego w sposób inny niż było to konieczne do stwierdzenia charakteru, cech i funkcjonowania towaru.<br />
                        3.8. Prawo do odstąpienia od umowy nie przysługuje klientowi w odniesieniu do umów:<br />
                        a) o świadczenie usług, jeżeli T-BAT TOUR wykonało w pełni usługę za wyraźną zgodą klienta, który został poinformowany przed rozpoczęciem świadczenia, że po spełnieniu przez T-BAT TOUR świadczenia utraci prawo odstąpienia od umowy;<br />
                        b) w której cena lub wynagrodzenie zależy od wahań na rynku finansowym, nad którymi T-BAT TOUR nie sprawuje kontroli, i które mogą wystąpić przed upływem terminu do odstąpienia od umowy;<br />
                        c) w której przedmiotem świadczenia jest towar dostarczany w zapieczętowanym opakowaniu, którego po otwarciu opakowania nie można zwrócić ze względu na ochronę zdrowia lub ze względów higienicznych, jeżeli opakowanie zostało otwarte po dostarczeniu;<br />
                        d) w której przedmiotem świadczenia są rzeczy, które po dostarczeniu, ze względu na swój charakter, zostają nierozłącznie połączone z innymi rzeczami.<br />
                        3.9. W przypadku pytań dotyczących odstąpienia od umowy, prosimy o kontakt z T-BAT TOUR za pośrednictwem e-maila: info@t-bat.com.
                    </Content>
                    <Subtitle>4. Reklamacje</Subtitle>
                    <Content>
                        4.1. Klient ma prawo złożyć reklamację w przypadku niezgodności wycieczki<br/> z opisem na stronie internetowej T-BAT TOUR.<br />
                        4.2. Reklamacje należy zgłaszać na adres e-mail: reklamacje@t-bat.com.<br />
                        4.3. Reklamacje są rozpatrywane w terminie do 14 dni od dnia otrzymania zgłoszenia. W przypadku pozytywnego rozpatrzenia reklamacji, Klientowi przysługuje prawo do wymiany wycieczki na inną o równoważnej wartości lub zwrotu pieniędzy.
                    </Content>
                    <Subtitle>5. Odpowiedzialność T-BAT TOUR</Subtitle>
                    <Content>
                        5.1. T-BAT TOUR nie ponosi odpowiedzialności za opóźnienia lub anulowania wycieczek spowodowane siłą wyższą lub działaniami podmiotów trzecich (np. dostawców usług kosmicznych).<br />
                        5.2. T-BAT TOUR nie ponosi odpowiedzialności za szkody wynikłe z nieprawidłowego użytkowania zakupionej wycieczki przez Klienta.
                    </Content>
                    <Subtitle>6. Ochrona danych osobowych</Subtitle>
                    <Content>
                        6.1. Administratorem danych osobowych Klientów jest:<br/> Ploter Holding Sp.z.o.o., ul. Kosmiczna 42, 00-001 Warszawa, Polska.<br />
                        6.2. Dane osobowe Klientów są przetwarzane zgodnie z Polityką Prywatności dostępną na stronie internetowej T-BAT TOUR.
                    </Content>
                    <Subtitle>7. Postanowienia końcowe</Subtitle>
                    <Content>
                        7.1. T-BAT TOUR zastrzega sobie prawo do wprowadzania zmian w niniejszym Regulaminie. O wszelkich zmianach Klienci zostaną poinformowani na stronie internetowej.<br />
                        7.2. W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy prawa polskiego.<br />
                        7.3. Wszelkie spory wynikające z realizacji niniejszego Regulaminu będą rozstrzygane przez sąd właściwy dla siedziby Ploter Holding Sp.z.o.o.
                    </Content>
                </Wrapper>
            </Container>
        </motion.div>
    );
};

export default Terms;
