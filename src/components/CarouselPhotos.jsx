import React from 'react';
import galacticImg from "../assets/Galactik.jpg";
import issImg from "../assets/ISS_SpaceShuttle.jpg";
import atlantisImg from "../assets/SpaceShuttle_Atlantis.jpg";
import technicalImg from "../assets/SpaceShuttleTechnical.jpg";
import walkingSpaceImg from "../assets/WolkingSpace.jpg";



import styled from "styled-components";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Container = styled.div`
  color: white !important;
  background-color: #111111b2;
  min-height: calc(100vh - 347px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselWrapper = styled.div`
  height: 80%;
  width: 80%;
  margin-top: 4rem;
`;

const CarouselPhotos = () => {
    return (
        <Container>
            <CarouselWrapper>
                <Carousel autoPlay interval={1500} infiniteLoop stopOnHover={false}>
                    <div>
                        <img src={galacticImg} alt="Galaktyka"/>
                    </div>
                    <div>
                        <img src={issImg} alt="Międzynarodowa Stacja Kosmiczna"/>
                    </div>
                    <div>
                        <img src={atlantisImg} alt="Prom kosmiczny Atlantis"/>
                    </div>
                    <div>
                        <img src={technicalImg} alt="Rysunek techniczny promu kosmicznego"/>
                    </div>
                    <div>
                        <img src={walkingSpaceImg} alt="Spacer w kosmosie"/>
                    </div>
                </Carousel>
            </CarouselWrapper>
        </Container>
    );
};

export default CarouselPhotos;