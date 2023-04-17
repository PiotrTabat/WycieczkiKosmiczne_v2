import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;
const Wrapper = styled.div`
  padding-top: 2rem;
  margin-top: 3rem;
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

const QuantityButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  margin-left: 1rem;
`;

const PlusButton = styled(Button)`
  width: 25px;
  height: 25px;
  font-size: 18px;
`;

const MinusButton = styled(Button)`
  width: 25px;
  height: 25px;
  font-size: 18px;
`;

const Quantity = styled.h1`
  font-size: 22px;
  font-weight: 600;
`;


const ShoppingCartItems = ({
                               selectedTours,
                               setSelectedTours,
                               selectedAccessories,
                               setSelectedAccessories,
                               selectedInsurances,
                               setSelectedInsurances
                           }) => {

    const updateQuantity = (event, id, type, delta) => {
        event.preventDefault();
        const update = (items, setSelected) => {
            const index = items.findIndex((item) => item.id === id);
            if (index > -1) {
                const updatedItems = [...items];
                updatedItems[index] = {...updatedItems[index], quantity: updatedItems[index].quantity + delta};
                setSelected(updatedItems);
            }
        };

        if (type === 'tour') {
            update(selectedTours, setSelectedTours);
        } else if (type === 'accessory') {
            update(selectedAccessories, setSelectedAccessories);
        } else if (type === 'insurance') {
            update(selectedInsurances, setSelectedInsurances);
        }
    };
    const handleRemoveClick = (id, type) => {
        if (type === 'tour') {
            setSelectedTours(selectedTours.filter((item) => item.id !== id));
        } else {
            setSelectedAccessories(selectedAccessories.filter((accessory) => accessory.id !== id));
            setSelectedInsurances(selectedInsurances.filter((insurance) => insurance.id !== id));
        }
    };

    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate('/login');
    };


    const totalAmount = selectedTours.reduce((total, tour) => total + tour.price * tour.quantity, 0)
        + selectedAccessories.reduce((total, accessory) => total + accessory.price * accessory.quantity, 0)
        + selectedInsurances.reduce((total, insurance) => total + insurance.price * insurance.quantity, 0);


    return (
        <Container>
            <Wrapper>
                {selectedTours.map((item) => (
                    <TourItem key={item.id}>
                        <Image src={item.img} alt={item.title}/>
                        <Title>{item.title}</Title>
                        <Price>{item.price}</Price>
                        <Quantity>Ilość: {item.quantity}</Quantity>
                        <Button onClick={() => handleRemoveClick(item.id, 'tour')}>Usuń</Button>
                        <QuantityButtons>
                            <PlusButton onClick={() => updateQuantity(item.id, 'tour', 1)}>+</PlusButton>
                            <MinusButton onClick={() => updateQuantity(item.id, 'tour', -1)}>-</MinusButton>
                        </QuantityButtons>
                    </TourItem>
                ))}

                {selectedAccessories.map((accessory) => (
                    <TourItem key={accessory.id}>
                        <Image src={accessory.img} alt={accessory.title}/>
                        <Title>{accessory.title}</Title>
                        <Price>{accessory.price}</Price>
                        <Quantity>Ilość: {accessory.quantity}</Quantity>
                        <Button onClick={() => handleRemoveClick(accessory.id, 'accessory')}>Usuń</Button>
                        <QuantityButtons>
                            <PlusButton onClick={() => updateQuantity(accessory.id, 'accessory', 1)}>+</PlusButton>
                            <MinusButton onClick={() => updateQuantity(accessory.id, 'accessory', -1)}>-</MinusButton>
                        </QuantityButtons>
                    </TourItem>
                ))}
                {selectedInsurances.map((insurance) => (
                    <TourItem key={insurance.id}>
                        <Image src={insurance.img} alt={insurance.title}/>
                        <Title>{insurance.title}</Title>
                        <Price>{insurance.price}</Price>
                        <Quantity>Ilość: {insurance.quantity}</Quantity>
                        <Button onClick={() => handleRemoveClick(insurance.id, 'insurance')}>Usuń</Button>
                        <QuantityButtons>
                            <PlusButton onClick={() => updateQuantity(insurance.id, 'insurance', 1)}>+</PlusButton>
                            <MinusButton onClick={() => updateQuantity(insurance.id, 'insurance', -1)}>-</MinusButton>
                        </QuantityButtons>
                    </TourItem>
                ))}

                <OrderButtonContainer>
                    <TotalAmount>Łączna kwota: {totalAmount}</TotalAmount>
                    {(selectedTours.length > 0 || selectedAccessories.length > 0 || selectedInsurances.length > 0) && (
                        <OrderButton onClick={handleOrderClick}>Złóż zamówienie</OrderButton>
                    )}
                </OrderButtonContainer>
            </Wrapper>
        </Container>
    );
};

export default ShoppingCartItems;
