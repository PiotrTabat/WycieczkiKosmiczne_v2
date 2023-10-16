import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111111b2;
  margin-top: 8rem;

  @media (max-width: 768px) {
    margin-top: 8rem;
  }
`;

const Wrapper = styled.div`
  padding: 2rem;
  width: 80%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 90vh;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const ContactInfo = styled.div`
  font-size: 18px;
  line-height: 1.6;
  width: 40%;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: 0;
  
  
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #00a2ff;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #016091;
  }

  &:active {
    background-color: #013656;
  }
`;


const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
 position: absolute;
    bottom: 10rem;
    left: 65%;

  @media (max-width: 768px) {
    position: static;
    margin-top: 1rem;
    gap: 2rem;
  }
`;

const SocialMediaIcon = styled.a`
  color: white;
  font-size: 40px;
  transition: color 0.2s;

  &:hover {
    color: #00a2ff;
  }
`;

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <Container id="contact">
                <Wrapper>
                    <Title>Kontakt</Title>
                    <ContentWrapper>
                        <ContactInfo>
                            T-BAT TOUR<br />
                            Pjoter Holding Sp.z.o.o.<br />
                            ul. Kosmiczna 42<br />
                            00-001 Warszawa, Polska<br /><br />
                            Telefon: +48 123 456 789<br />
                            Email: kontakt@tbattour.com<br /><br />
                            <Map
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.474469803286!2d21.18089501610387!3d52.41195447979305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd8f2459a9d1%3A0x56f1a6f1fd2!2s%2042%2C%20%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sus!4v1621612459359!5m2!1sen!2sus"
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </ContactInfo>
                        <Form>
                            <Input type="text" name="name" placeholder="Imię i nazwisko" required />
                            <Input type="email" name="email" placeholder="Adres e-mail" required />
                            <TextArea name="message" rows="5" placeholder="Wiadomość" required></TextArea>
                            <Button type="submit">Wyślij</Button>
                        </Form>
                    </ContentWrapper>
                    <SocialMediaWrapper>
                        <SocialMediaIcon href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </SocialMediaIcon>
                        <SocialMediaIcon href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialMediaIcon>
                        <SocialMediaIcon href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialMediaIcon>
                    </SocialMediaWrapper>
                </Wrapper>
            </Container>
        </motion.div>
    );
};

export default Contact;
