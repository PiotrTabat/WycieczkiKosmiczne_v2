import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {FaArrowLeft} from 'react-icons/fa'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  padding-bottom: 8rem;
`;

const Wrapper = styled.div`
  padding: 4rem 0 2rem 0;
  background-color: #111111b2;
  width: 70%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 2rem 2rem;
  font-weight: 600;
  text-shadow: 0 0 10px #00a2ff;
`;


const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.7rem 2rem 0 0;
  border: none;
  border-radius: 5px;
  background-color: #222222;
  color: white;
  text-shadow: 0 0 10px ${props => props.isInvalid ? '#ff0000' : '#00a2ff'};
  box-shadow: 0 0 10px ${props => props.isInvalid ? '#ff0000' : '#00a2ff'};

  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00a2ff, 0 0 10px #00a2ff;
  }
`;

const Select = styled.select`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.7rem 0 0 2rem;
  border: none;
  border-radius: 5px;
  background-color: #222222;
  color: white;
  text-shadow: 0 0 10px ${props => props.isInvalid ? '#ff0000' : '#00a2ff'};
  box-shadow: 0 0 10px ${props => props.isInvalid ? '#ff0000' : '#00a2ff'};

  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00a2ff, 0 0 10px #00a2ff;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin-right: 2rem;
`;


const Button = styled.button`
  background-color: #0079c0;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  margin: 2rem 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #01608f;
  }

  &:active {
    background-color: #002c3f;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #00a2ff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #01608f;
  }

  &:active {
    color: #002c3f;
  }
`;


const OrderPage = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [shipping, setShipping] = useState("");
    const [payment, setPayment] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
// Kod obsługujący przesłanie formularza zamówienia
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <MainContainer>
                <Container>
                    <Title>Wycieczki kosmiczne - zamówienie</Title>
                    <Wrapper>
                        <OrderForm onSubmit={handleSubmit}>
                            <ColumnWrapper>
                                <LeftColumn>
                                    <Input
                                        type="text"
                                        placeholder="Imię i nazwisko"
                                        required
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                    <Input
                                        type="tel"
                                        placeholder="Numer telefonu"
                                        required
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                        value={phoneNumber}
                                        onChange={(event) => setPhoneNumber(event.target.value)}
                                    />
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="miejscowość"
                                        required
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="ulica"
                                        required
                                        value={street}
                                        onChange={(event) => setStreet(event.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Kod pocztowy"
                                        pattern="[0-9]{2}-[0-9]{3}"
                                        value={postalCode}
                                        onChange={(event) => setPostalCode(event.target.value)}
                                    />
                                </LeftColumn>
                                <RightColumn>
                                    <Select required
                                            value={shipping}
                                            onChange={(event) => setShipping(event.target.value)}
                                    >
                                        <option value="">Wybierz formę dostawy</option>
                                        <option value="personal">Odbiór osobisty</option>
                                        <option value="courier">Dostawa kurierem</option>
                                        <option value="parcel">Paczkomat</option>
                                        <option value="post">Wysyłka pocztą</option>
                                    </Select>
                                    <Select
                                        required
                                        value={payment}
                                        onChange={(event) => setPayment(event.target.value)}
                                    >
                                        <option value="">Wybierz formę płatności</option>
                                        <option value="creditCard">Karta kredytowa</option>
                                        <option value="bankTransfer">Przelew bankowy</option>
                                        <option value="apple">ApplePay</option>
                                        <option value="google">G-pay</option>
                                        <option value="blik">Blik</option>
                                    </Select>
                                </RightColumn>
                            </ColumnWrapper>
                            <ButtonsWrapper>
                                <BackButton onClick={() => window.history.back()}>
                                    <FaArrowLeft fontSize={30}/>
                                </BackButton>
                                <Button type="submit">Złóż zamówienie</Button>
                            </ButtonsWrapper>
                        </OrderForm>
                    </Wrapper>
                </Container>
            </MainContainer>
        </motion.div>
    );

};

export default OrderPage;