import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

const DropdownMenu = styled.div`
  display: ${({show}) => (show ? 'block' : 'none')};
  position: absolute;
  background-color: black;
  padding: 1rem;
  border-radius: 4px;
  z-index: 999;
  opacity: 0.9;
`;


const DropdownItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  display: block;
  text-transform: uppercase;
  font-weight: 400;
  transition: 0.2s all ease-in-out;
  color: white;
  padding: 0.5rem 1rem;

  &:hover {
    color: #00a2ff;
  }

  &:active {
    color: #00314d;
  }
`;

const Dropdown = ({isHomePage, show}) => {
    return (
        <DropdownMenu show={show}>
            {isHomePage ? (
                <>
                    <ScrollLink to="tours" smooth={true} duration={500}>
                        <DropdownItem>Wycieczki</DropdownItem>
                    </ScrollLink>
                    <ScrollLink to="accessories" smooth={true} duration={500}>
                        <DropdownItem>Akcesoria</DropdownItem>
                    </ScrollLink>
                    <ScrollLink to="insurances" smooth={true} duration={500}>
                        <DropdownItem>Ubezpieczenia</DropdownItem>
                    </ScrollLink>
                </>
            ) : (
                <>
                    <Link to={{pathname: '/', state: {scrollTo: 'tours'}}}>
                        <DropdownItem>Wycieczki</DropdownItem>
                    </Link>
                    <Link to={{pathname: '/', state: {scrollTo: 'accessories'}}}>
                        <DropdownItem>Akcesoria</DropdownItem>
                    </Link>
                    <Link to={{pathname: '/', state: {scrollTo: 'insurances'}}}>
                        <DropdownItem>Ubezpieczenia</DropdownItem>
                    </Link>
                </>
            )}
        </DropdownMenu>
    );
};

export default Dropdown;
