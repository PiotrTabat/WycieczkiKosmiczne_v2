import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
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
  padding: 2rem 0 2rem 0;
  background-color: #111111b2;
  width: 70%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 2rem;
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
  width: 30%;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  background-color: #222222;
  color: white;
  text-shadow: 0 0 10px ${props => props.isInvalid ? '#ff0000' : '#00a2ff'};
  box-shadow: 0 0 10px ${props => props.isInvalid ? '#ff0000' : '#00a2ff'};
  ${props => props.name};

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
const WarningMessage = styled.p`
  color: #FFA500;
  font-size: 1.2rem;
  margin: 1rem 0;
`;


const Register = () => {
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [message, setMessage] = useState("");


    const handleEmailChange = (event) => {
        const email = event.target.value;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        setEmailIsValid(emailRegex.test(email));
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        setMessage("Witaj użytkowniku, właśnie utworzyłeś swoje konto.");

        // kod do logiki rejestracji użytkownika
    };


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <MainContainer>
                <Container>
                    <Title>Utwórz konto</Title>
                    <Wrapper>
                        {message && <WarningMessage>{message}</WarningMessage>}
                        {/* ... */}
                        <RegisterForm onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="Imię"
                                required
                            />
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Nazwisko"
                                required
                            />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                isInvalid={!emailIsValid}
                                onChange={handleEmailChange}
                            />
                            <Input
                                type="password"
                                name="password"
                                placeholder="Hasło"
                            />
                            <ButtonsWrapper>
                                <BackButton onClick={() => window.history.back()}>
                                    <FaArrowLeft fontSize={30}/>
                                </BackButton>
                                <Button type="/submit">Utwórz konto</Button>
                            </ButtonsWrapper>
                        </RegisterForm>
                    </Wrapper>
                </Container>
            </MainContainer>
        </motion.div>
    );
};

export default Register;