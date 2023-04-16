import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import astronautSuit from '../assets/IMG_0761.JPG';
import earthFromSpace from '../assets/IMG_0758.JPG';


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

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  transform: rotate(45deg);
  margin: 1rem auto;
  animation: bounce 1.5s infinite;
  
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-15px) rotate(45deg);
    }
    60% {
      transform: translateY(-10px) rotate(45deg);
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Image = styled.img`
  width: 49%;
  height: 100%;
  object-fit: cover;;
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
`;

const AboutUs = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Title>O nas</Title>
                <Wrapper>
                    <Content>
                        T-BAT TOUR to innowacyjna firma specjalizująca się w organizacji niezapomnianych wycieczek w
                        kosmos.
                        <br/>
                        Naszym celem jest dostarczenie klientom wyjątkowych doświadczeń oraz umożliwienie odkrywania
                        nieograniczonych możliwości, jakie niesie za sobą przestrzeń kosmiczna.
                        <br/>
                        Założona przez entuzjastę kosmonautyki i turystyki, T-BAT TOUR łączy pasję do eksploracji
                        kosmosu z dążeniem do zaspokojenia potrzeb coraz bardziej wymagających podróżników.
                        <br/>
                        Nasza oferta opiera się na współpracy z ekspertami w dziedzinie kosmonautyki, co pozwala nam
                        zapewnić najwyższej jakości usługi i niezapomniane przeżycia.
                        <br/>
                        W T-BAT TOUR dbamy o bezpieczeństwo i komfort naszych klientów.
                        <br/>
                        Pracujemy tylko z zaufanymi partnerami i korzystamy z najnowszych technologii.
                        <br/>
                        Nasze wycieczki kosmiczne są dostępne w różnych opcjach cenowych, co pozwala każdemu znaleźć
                        idealną propozycję dla siebie.
                        <br/>
                        Nasza misja wykracza poza organizację wycieczek.
                        <br/>
                        Chcemy inspirować ludzi do odkrywania nieskończoności przestrzeni kosmicznej i wprowadzić
                        turystykę kosmiczną na nowy poziom. Jesteśmy dumni, że nasze usługi pozwalają na realizację
                        marzeń o podróżach kosmicznych oraz przyczyniają się do rozwoju przemysłu kosmicznego.
                        <br/>
                        Dołącz do nas i razem odkryjmy niesamowity świat podróży kosmicznych z T-BAT TOUR!
                    </Content>
                    <Arrow/>
                </Wrapper>
                <Title>O mnie</Title>
                <Content>
                    <ImagesContainer>
                        <Image src={astronautSuit} alt="kombinezon kosmonauty"/>
                        <Image src={earthFromSpace} alt="ziemia z kosmosu"/>
                    </ImagesContainer>
                </Content>
                <Arrow/>
                <Wrapper>
                    <Content>
                        Jestem założycielem i głównym koordynatorem w firmie T-BAT TOUR, która specjalizuje się
                        w organizacji niezapomnianych wycieczek kosmicznych.
                        <br/>
                        Naszą misją jest otwarcie drzwi do niesamowitych przygód w przestrzeni kosmicznej dla
                        klientów pragnących poszerzyć swoje horyzonty.
                        <br/>
                        Moje wieloletnie doświadczenie w branży turystycznej oraz współpraca z ekspertami w
                        dziedzinie kosmonautyki sprawiły, że jestem w stanie oferować naszym klientom najwyższej
                        jakości wycieczki i programy, które spełniają oczekiwania nawet najbardziej wymagających
                        podróżników.
                        <br/>
                        Opracowaliśmy szeroką gamę wycieczek kosmicznych w różnych opcjach i cenach, dzięki
                        czemu każdy może znaleźć coś dla siebie.
                        <br/>
                        Bezpieczeństwo i komfort naszych klientów są dla nas priorytetem, dlatego stale
                        doskonalimy naszą ofertę, współpracujemy tylko z zaufanymi partnerami i korzystamy ze
                        sprawdzonych technologii.
                        <br/>
                        Serdecznie zapraszam do wspólnego odkrywania niesamowitych doświadczeń w przestrzeni
                        kosmicznej razem z T-BAT TOUR, będąc częścią Ploter Holding Sp.z.o.o.
                    </Content>
                </Wrapper>
            </Container>
        </motion.div>
    );
};

export default AboutUs;
