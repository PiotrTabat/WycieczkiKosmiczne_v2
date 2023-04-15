import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    right: 0;
  padding: 0.5rem 4rem;
  background-color: black;
  color: white !important;
  z-index: ${({isOpen}) => (isOpen ? "0" : "100")};
  opacity: 0.8;
    transition: all 0.2s ease;
    @media screen and (max-width: 768px){
        padding: 0.5rem 2rem;
    }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
    width: 7rem;
    height: 7rem;
`;
const Right = styled.div`
  text-align: right;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1250px){
    flex: 1;
  }
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;
const Mobile = styled.div`
  flex: 1;
  display: none;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px){
    display: flex;
  }
`
const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  text-transform: uppercase;
  font-weight: 400;
  transition: 0.2s all ease-in-out;
  color: white;

  &:hover{
    color: #00a2ff;
  }
`;

const Navbar = ({ isOpen, toggle }) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/"><Logo src={logo} /></Link>
                </Left>
                <Right>
                    <Link to="/"><MenuItem>Strona Główna</MenuItem></Link>
                    <Link to="/tour"><MenuItem>Wycieczki</MenuItem></Link>
                    <Link to="/accessories"><MenuItem>Akcesoria</MenuItem></Link>
                    <Link to="/about-us"><MenuItem>O Nas</MenuItem></Link>
                    <Link to="/shopping-cart"><MenuItem><FaShoppingCart fontSize={24} /></MenuItem></Link>
                </Right>
                <Mobile>
                    <FaBars fontSize="24px" cursor="pointer" z-index="999" onClick={toggle} />
                </Mobile>
            </Wrapper>
        </Container >
    )
}

export default Navbar
