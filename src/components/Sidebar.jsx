import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_violet.png'

const Container = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: black;
    display: none;
    left: 0;
    transition: all 0.2s ease;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    color: white;
    padding: ${({ isOpen }) => (isOpen ? "200px 0 0 0" : "0")};
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 768px){
        display: flex;
    }
`
const CloseIcon = styled(FaTimes)`
    color: white;
`
const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
const LogoWrapper = styled.h1`
    margin-bottom: 50px;
`
const Logo = styled.img`
    width: 7rem;
    height: 7rem;
`;
const MenuItems = styled.div`
display: flex;
flex-direction: column;
width: 50%;
align-items: center;
`
const MenuItem = styled.p`
margin-bottom: 40px;
font-size: 24px;
font-weight: 400;
color: white;

    &:hover{
    color: #00a2ff;
}
`

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <LogoWrapper>
                <Link to="/"><Logo src={logo} /></Link>
            </LogoWrapper>
            <MenuItems>
                <Link to="/"><MenuItem onClick={toggle}>Strona Główna</MenuItem></Link>
                <Link to="/about"><MenuItem onClick={toggle}>O Nas</MenuItem></Link>
                <Link to="/shopping-cart"><MenuItem onClick={toggle}><FaShoppingCart /></MenuItem></Link>
            </MenuItems>
        </Container>
    )
}

export default Sidebar