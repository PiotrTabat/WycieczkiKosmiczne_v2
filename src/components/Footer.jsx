import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: normal;
  color: white;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-left: 1rem;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:  0  0 2rem 10rem;
  text-align: left;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:1rem 4rem 0 0;
`
const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 60%;
`
const Line = styled.p`
  font-size: 14px;
  text-align: left;
  width: 60%;
`
const Line1 = styled.div`
  font-size: 24px;
  text-align: center;
  display: flex;
  width: 5rem;
  height: 5rem;
`
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #00a2ff;
    text-decoration: underline;
  }
`
const Copyright = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-size: 16px;
  text-align: left;
  margin: 0 4rem 2rem 0;
  line-height: 1.5;
  color: white;
`;

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Container>
            <Left>
                <Title>Informacje kontaktowe</Title>
                <Line>Pjoter Holding Sp. z o.o.</Line>
                <Line>ul. Kosmiczna 42</Line>
                <Line>00-001 Warszawa</Line>
                <Line>Polska</Line>
                <Line><br /></Line>
                <Line>Telefon: +48 123 456 789</Line>
                <Line>E-mail: kontakt@pjoter.t-bat.com</Line>
            </Left>
            <Center>
                <NavLink to="/" onClick={scrollToTop}>
                    Strona główna
                </NavLink>
                <NavLink to="/privacy">Polityka prywatności</NavLink>
                <NavLink to="/regulations">Regulamin sklepu</NavLink>
                <NavLink to="/payments">Płatności</NavLink>
                <NavLink to="/delivery">Dostawa</NavLink>
                <NavLink to="/returns">Zwroty</NavLink>
                <NavLink to="/contact">Kontakt</NavLink>
            </Center>
            <Right>
                <Line1><a href="https://www.facebook.com/your_page" target="_blank" rel="noopener noreferrer"><FaFacebookF fontSize={30} /></a></Line1>
                <Line1><a href="https://www.twitter.com/your_account" target="_blank" rel="noopener noreferrer"><FaTwitter fontSize={30} /></a></Line1>
                <Line1><a href="https://www.instagram.com/your_account" target="_blank" rel="noopener noreferrer"><FaInstagram fontSize={30} /></a></Line1>
            </Right>
            <Copyright>
                &copy; {new Date().getFullYear()} Pjoter Holding Sp. z o.o. Wszelkie prawa zastrzeżone.<br />
                Projekt i wykonanie: T-BAT<br />
                <br/>
                Wszelkie prawa dotyczące treści i zdjęć umieszczonych na stronach sklepu należą do ich właścicieli.
            </Copyright>
        </Container>
    )
}

export default Footer
