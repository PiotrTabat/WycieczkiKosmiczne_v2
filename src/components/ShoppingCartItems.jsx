import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useCart} from './CartContext';


const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
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

  @media (max-width: 768px) {
    width: 95%; 
    margin-top: 1.5rem;
  }
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

  @media (max-width: 768px) {
    height: auto; 
    padding: 0.5rem;
    flex-direction: column; 
    align-items: flex-start;
  }
`;

const Image = styled.img`
  height: 4rem;
  width: 85px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 3rem;
    width: 60px;
    margin-bottom: 0.5rem; 
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
`;

const Price = styled.h1`
  font-size: 22px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.5rem;
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

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
`;

const ShoppingCartItems = () => {
    const {
        selectedTours,
        setSelectedTours,
        selectedAccessories,
        setSelectedAccessories,
        selectedInsurances,
        setSelectedInsurances,
    } = useCart();


    const removeCartItem = (id, type) => {
        const update = (items, setSelected) => {
            const updatedItems = items.filter((item) => item.id !== id);
            setSelected(updatedItems);
        };

        if (type === 'tour') update(selectedTours, setSelectedTours);
        else if (type === 'accessory') update(selectedAccessories, setSelectedAccessories);
        else if (type === 'insurance') update(selectedInsurances, setSelectedInsurances);
    };

    const updateCartItem = (id, type, delta) => {
        const update = (items, setSelected) => {
            const index = items.findIndex((item) => item.id === id);
            if (index > -1) {
                const updatedItems = [...items];
                const newQuantity = updatedItems[index].quantity + delta;
                if (newQuantity > 0) {
                    updatedItems[index] = {...updatedItems[index], quantity: newQuantity};
                    setSelected(updatedItems);
                } else if (newQuantity === 0) {
                    removeCartItem(id, type);
                }
            }
        };

        if (type === 'tour') update(selectedTours, setSelectedTours);
        else if (type === 'accessory') update(selectedAccessories, setSelectedAccessories);
        else if (type === 'insurance') update(selectedInsurances, setSelectedInsurances);
    };



    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate('/login-to-order');
    };

    const totalAmount =
        selectedTours.reduce((total, tour) => total + tour.price * tour.quantity, 0) +
        selectedAccessories.reduce((total, accessory) => total + accessory.price * accessory.quantity, 0) +
        selectedInsurances.reduce((total, insurance) => total + insurance.price * insurance.quantity, 0);
    const displayTotalAmount = isNaN(totalAmount) ? 0 : totalAmount;


    return (
        <Container>
            <Wrapper>
                {selectedTours.map((tour) => (
                    <TourItem key={tour.id}>
                        <Image src={tour.img} alt={tour.title}/>
                        <Title>{tour.title}</Title>
                        <Price>{tour.price} PLN</Price>
                        <Quantity>Ilość: {tour.quantity}</Quantity>
                        <Button onClick={() => removeCartItem(tour.id, 'tour')}>Usuń</Button>
                        <QuantityButtons>
                            <PlusButton onClick={() => updateCartItem(tour.id, 'tour', 1)}>+</PlusButton>
                            <MinusButton onClick={() => updateCartItem(tour.id, 'tour', -1)}>-</MinusButton>
                        </QuantityButtons>
                    </TourItem>
                ))}

                {selectedAccessories.map((accessory) => (
                    <TourItem key={accessory.id}>
                        <Image src={accessory.img} alt={accessory.title}/>
                        <Title>{accessory.title}</Title>
                        <Price>{accessory.price} PLN</Price>
                        <Quantity>Ilość: {accessory.quantity}</Quantity>
                        <Button onClick={() => removeCartItem(accessory.id, 'accessory')}>Usuń</Button>
                        <QuantityButtons>
                            <PlusButton onClick={() => updateCartItem(accessory.id, 'accessory', 1)}>+</PlusButton>
                            <MinusButton onClick={() => updateCartItem(accessory.id, 'accessory', -1)}>-</MinusButton>
                        </QuantityButtons>
                    </TourItem>
                ))}
                {selectedInsurances.map((insurance) => (
                    <TourItem key={insurance.id}>
                        <Image src={insurance.img} alt={insurance.title}/>
                        <Title>{insurance.title}</Title>
                        <Price>{insurance.price} PLN</Price>
                        <Quantity>Ilość: {insurance.quantity}</Quantity>
                        <Button onClick={() => removeCartItem(insurance.id, 'insurance')}>Usuń</Button>
                        <QuantityButtons>
                            <PlusButton onClick={() => updateCartItem(insurance.id, 'insurance', 1)}>+</PlusButton>
                            <MinusButton onClick={() => updateCartItem(insurance.id, 'insurance', -1)}>-</MinusButton>
                        </QuantityButtons>
                    </TourItem>
                ))}

                <OrderButtonContainer>
                    <TotalAmount>Łączna kwota: {displayTotalAmount} PLN</TotalAmount>
                    {(selectedTours.length > 0 || selectedAccessories.length > 0 || selectedInsurances.length > 0) && (
                        <OrderButton onClick={handleOrderClick}>Złóż zamówienie</OrderButton>
                    )}
                </OrderButtonContainer>
            </Wrapper>
        </Container>
    );
};

export default ShoppingCartItems;
