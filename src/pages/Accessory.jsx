import React from 'react';
import {motion} from 'framer-motion';
import {Products} from '../data';
import styled from 'styled-components';
import {useParams, useNavigate} from 'react-router-dom';
import {useCart} from '../components/CartContext';

const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;

  @media (max-width: 768px) {
    margin-top: 7rem;
  }
`
const Wrapper = styled.div`
  padding: 1rem 4rem;
  background-color: #000000df;
  height: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #00a2ff;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem 2rem;
  }
`
const AccessoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`
const Image = styled.img`
  width: 95%;
  max-width: 990px;
  max-height: 450px;
  flex: 1;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    max-height: 300px;
  }
`
const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 10px;
  }
`
const Description = styled.div`
  flex: 1;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
`
const Price = styled.p`
  margin-top: 5rem;
  font-size: 26px;
  font-weight: 500;
  color: #00a2ff;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`
const Info = styled.p`
  margin-top: 2rem;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const AccessoryDescription = styled.p`
  margin-top: 2rem;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3rem;
  }
`
const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  justify-content: center;
  gap: 3rem;
`
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  transform: rotate(45deg);
  animation: bounce 1.5s infinite;
  cursor: pointer;


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

  &:hover {
    border-bottom: 3px solid #005283;
    border-right: 3px solid #005283;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #00a2ff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #0080cc;
  }
`

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  background: #00a2ff;
  border: none;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 6rem;

  &:hover {
    background: #005283;
  }

  &:active {
    transform: scale(0.95);
    background-color: #002134;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 15px;
    margin-right: 4rem;
  }
`;
const Accessory = () => {
    const {id} = useParams();
    const {addToCart} = useCart();
    const navigate = useNavigate();
    const currentIndex = Products.findIndex((product) => product.id === id);

    const handlePrevious = () => {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : Products.length - 1;
        navigate(`/accessory/${Products[prevIndex].id}`);
    };

    const handleAddToCart = (item) => {
        addToCart(item, 1);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % Products.length;
        navigate(`/accessory/${Products[nextIndex].id}`);
    };
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Wrapper>
                    {Products.filter((accessory) => accessory.id === id).map((filteredItem) => (
                        <AccessoryWrapper key={filteredItem.id}>
                            <Image src={process.env.PUBLIC_URL + '/' + filteredItem.img} alt={filteredItem.title} />
                            <Description>
                                <Title>{filteredItem.title}</Title>
                                <ButtonWrapper>
                                    <ArrowButton onClick={handlePrevious}>Poprzednia</ArrowButton>
                                    <ArrowWrapper>
                                        <Arrow onClick={scrollToBottom}/>
                                        <AddToCartButton onClick={() => handleAddToCart(filteredItem)}>
                                            Dodaj do koszyka
                                        </AddToCartButton>
                                    </ArrowWrapper>
                                    <ArrowButton onClick={handleNext}>Następna</ArrowButton>
                                </ButtonWrapper>
                                <Price>Cena: {filteredItem.price} PLN</Price>
                                <Info>
                                    Co zawiera: <br/> <br/> {filteredItem.plan}
                                </Info>
                                <AccessoryDescription>
                                    Opis wycieczki: <br/> <br/> {filteredItem.description}
                                </AccessoryDescription>
                            </Description>
                        </AccessoryWrapper>
                    ))}
                </Wrapper>
            </Container>
        </motion.div>
    );
};

export default Accessory
