import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 1rem;
  background-color: #111111b2;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TourItem = styled.div`
  padding: 0.1rem 1.5rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border: 1px solid #00a2ff;
  border-radius: 5px;
  height: 4.5rem;
`;

const Image = styled.img`
  height: 4rem;
  width: 85px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
`;

const Price = styled.h1`
  font-size: 22px;
  font-weight: 600;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  background: transparent;
  color: white;
  border: 1px solid #cb1515;
  border-radius: 5px;
  transition: 0.2s all ease-in-out;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #cb1515;
  }

  &:active {
    background-color: #410707;
  }
`;

const OrderButton = styled(Button)`
  margin-top: 1rem;
  width: 12rem;
  border-color: #13fa02;

  &:hover {
    background-color: #078300;
  }

  &:active {
    background-color: #033a00;
  }
`;

const TotalAmount = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin: 0.5rem 0.5rem;
`;

const OrderButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 84%;
  margin: 2rem 2rem;
`;


const ShoppingCartItems = ({selectedTours, setSelectedTours, selectedAccessories, setSelectedAccessorries}) => {

    const handleRemoveClick = (id, type) => {
        if(type==='tour'){
            setSelectedTours(selectedTours.filter((item) => item.id !== id));
        }
        else{
            setSelectedAccessorries(selectedAccessories.filter((accessory) => accessory.id !== id));
        }
    };

    const handleOrderClick = () => {
        alert('Zamówienie zostało złożone');
    };


    const totalAmount = selectedTours.reduce((total, tour) => total + tour.price, 0) + selectedAccessories.reduce((total, accessory) => total + accessory.price, 0);


    return (
        <Container>
            <Wrapper>
                {selectedTours.map((item) => (
                    <TourItem key={item.id}>
                        <Image src={item.img} alt={item.title}/>
                        <Title>{item.title}</Title>
                        <Price>{item.price}</Price>
                        <Button onClick={() => handleRemoveClick(item.id, 'tour')}>Usuń</Button>
                    </TourItem>
                ))}
                {selectedAccessories.map((accessory) => (
                    <TourItem key={accessory.id}>
                        <Image src={accessory.img} alt={accessory.title}/>
                        <Title>{accessory.title}</Title>
                        <Price>{accessory.price}</Price>
                        <Button onClick={() => handleRemoveClick(accessory.id, 'accessory')}>Usuń</Button>
                    </TourItem>
                ))}
                <OrderButtonContainer>
                    <TotalAmount>Łączna kwota: {totalAmount}</TotalAmount>
                    <OrderButton onClick={handleOrderClick}>Złóż zamówienie</OrderButton>
                </OrderButtonContainer>
            </Wrapper>
        </Container>
    );
};

export default ShoppingCartItems;
