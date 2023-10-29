import React, { useState } from 'react';
import styled from 'styled-components';
import {Products} from '../data';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useCart} from './CartContext';

const Container = styled.div`
  color: white !important;
  background-color: #111111b2;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;

  padding: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    height: calc(100vh - 134px);
    overflow-y: scroll;
  }
`;
const Accessory = styled.div`
  padding: 0.2rem 0.5rem;
  margin: 0.5rem;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  border: 1px solid #00a2ff;
  border-radius: 5px;
  height: 25rem;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: scale-down;
`;
const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`;
const Price = styled.p`
  font-size: 18px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 2.5rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  background: transparent;
  color: white;
  border: 1px solid #00a2ff;
  border-radius: 5px;
  transition: 0.2s all ease-in-out;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #00a2ff;
  }

  &:active {
    background-color: #002c44;
  }
`;

const Message = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 162, 255, 0.9);
  padding: 15px;
  border-radius: 8px;
  color: white;
  z-index: 1000;
`;

const AccessoryList = () => {
    const {addToCart} = useCart();
    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleAddToCart = (accessory) => {
        addToCart(accessory, 1);
        setShowAddedToCartMessage(true);
        setTimeout(() => {
            setShowAddedToCartMessage(false);
        }, 2000);
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Wrapper>
                    {Products.filter(product => product.type === 'accessory').map((accessory) => (
                        <Accessory key={accessory.id}>
                            <Image src={process.env.PUBLIC_URL + '/' + accessory.img} alt={accessory.title} />
                            <Title>{accessory.title}</Title>
                            <Price>Cena: {accessory.price} PLN</Price>
                            <Link to={"/accessory/" + accessory.id} onClick={scrollToTop}>
                                <Button>Zobacz Więcej</Button>
                            </Link>
                            <Button onClick={() => handleAddToCart(accessory)}>Dodaj do koszyka</Button>
                        </Accessory>
                    ))}
                </Wrapper>
                {showAddedToCartMessage && <Message>Produkt został dodany do koszyka!</Message>}
            </Container>
        </motion.div>
    );
};

export default AccessoryList;
