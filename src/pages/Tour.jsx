import React from 'react'
import {motion} from 'framer-motion';
import {Tours} from '../data';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  min-height: calc(100vh - 347px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  padding: 1rem 4rem;
  background-color: #000000df;
  height:auto;
  width: 70%;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #00a2ff;
`
const TourWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  width: 95%;
  max-width: 990px;
  max-height: 450px;
  flex: 1;
  object-fit: cover;
`
const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-top: 20px;
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
`
const Plan = styled.p`
  margin-top: 2rem;
  font-size: 20px;
`
const TourDescription = styled.p`
  margin-top: 2rem;
  font-size: 20px;
`
const Tour = () => {
    const {id} = useParams();
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}
        >
            <Container>
                <Wrapper>
                    {Tours.filter(tour => tour.id === id).map(filteredItem => (
                        <TourWrapper>
                            <Image src={filteredItem.img}/>
                            <Description>
                                <Title>{filteredItem.title}</Title>
                                <Price>Cena: {filteredItem.price} PLN</Price>
                                <Plan>Plan podróży: <br/> <br/> {filteredItem.plan}</Plan>
                                <TourDescription>Opis wycieczki: <br/> <br/> {filteredItem.description}
                                </TourDescription>
                            </Description>
                        </TourWrapper>
                    ))}
                </Wrapper>
            </Container>
        </motion.div>
    )
}

export default Tour
