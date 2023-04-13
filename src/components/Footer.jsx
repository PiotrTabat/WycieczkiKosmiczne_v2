import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #000;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: left;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 7rem;
    margin: 10px;
`
const Name = styled.p`
    text-align: left;
    font-size: 16px;
    font-weight: 500;
`

const Footer = () => {
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
            <Right>
                <Line1><FaFacebookF fontSize={30} /> <Name>Facebook</Name></Line1>
                <Line1><FaTwitter fontSize={30} /> <Name>Twitter</Name></Line1>
                <Line1><FaInstagram fontSize={30} /> <Name>Instagram</Name></Line1>
            </Right>
        </Container>
    )
}

export default Footer
