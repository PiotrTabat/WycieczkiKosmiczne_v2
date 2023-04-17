import React from 'react'
import styled from 'styled-components'
import {Tours} from '../data'
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";


const Container = styled.div`
  color: white !important;
  background-color: #111111b2;
  width: 100%;
`
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 1000px) {
    height: calc(100vh - 134px);
    overflow-y: scroll;
  }
`
const Tour = styled.div`
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
`
const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`
const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`
const Price = styled.p`
  font-size: 18px;
`
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
    background-color: #003046;
  }
`

const TourList = ({handleClick}) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Wrapper>
                    {Tours.map((tour) => (
                        <Tour key={tour.id}>
                            <Image src={tour.img}/>
                            <Title>{tour.title}</Title>
                            <Price>Cena: {tour.price} PLN</Price>
                            <Link to={"/tour/" + tour.id}>
                                <Button>Zobacz Więcej</Button>
                            </Link>
                            <Button onClick={() => handleClick(tour.id, 'tour')}>Dodaj do koszyka</Button>
                        </Tour>
                    ))}
                </Wrapper>
            </Container>
        </motion.div>
    );
};
export default TourList;