import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';


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

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 2rem 2rem;
  font-weight: 600;
  text-shadow: 0 0 10px #00a2ff;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
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

  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00a2ff, 0 0 10px #00a2ff;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: #0079c0;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 2rem;
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
const GuestButton = styled(Button)`
  background-color: #0079c0;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
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

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 1.2rem;
  margin: 1rem 0;
`;
const SignUpLink = styled(Link)`
  color: #00a2ff;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0174a9;
  }

  &:active {
    color: #002c3f;
  }
`;

const LoginPage = () => {
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);

    const handleEmailChange = (event) => {
        const email = event.target.value;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        setEmailIsValid(emailRegex.test(email));
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setPasswordIsValid(password.length > 0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Kod obsługujący logowanie (np. autentykacja, przekierowanie itp.)
    };

    const showError = !emailIsValid || !passwordIsValid;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <MainContainer>
                <Container>
                    <Title>Login</Title>
                    <Wrapper>
                        {showError && (
                            <ErrorMessage>Proszę wprowadzić prawidłowy adres e-mail i hasło.</ErrorMessage>
                        )}
                        <LoginForm onSubmit={handleSubmit}>
                            <Input
                                type="email"
                                placeholder="Email"
                                required
                                isInvalid={!emailIsValid}
                                onChange={handleEmailChange}
                            />
                            <Input
                                type="password"
                                placeholder="Hasło"
                                required
                                isInvalid={!passwordIsValid}
                                onChange={handlePasswordChange}
                            />
                            <ButtonsContainer>
                                <Button type="submit">Zaloguj się</Button>
                                <Link to="/order">
                                    <GuestButton onClick={() => {/* Tutaj dodaj funkcję obsługującą zakup jako gość */}}>
                                        Kup jako gość
                                    </GuestButton>
                                </Link>
                            </ButtonsContainer>
                        </LoginForm>
                        <SignUpLink to="/signup">Utwórz konto</SignUpLink>
                    </Wrapper>
                </Container>
            </MainContainer>
        </motion.div>
    );
};

export default LoginPage;
