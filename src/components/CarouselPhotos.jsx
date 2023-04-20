import React from 'react';
import galacticImg from "../assets/galactika.jpg";
import issImg from "../assets/issSpaceShuttle.jpg";
import atlantisImg from "../assets/SpaceShuttleAtlantis.jpg";
import spaceShuttleTechnical2Img from "../assets/spaceShuttleTechnical2.jpg";
import walkingSpaceImg from "../assets/WolkingSpace.jpg";
import earthOnSpaceImg from "../assets/earthOnSpace.jpg";
import galactik3Img from "../assets/galactik3.jpg";
import galactik_2Img from "../assets/galactik_2.jpg";
import issSpaceShuttleImg from "../assets/issSpaceShuttle.jpg";
import sateliteImg from "../assets/satelite.jpg";





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

const StyledImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;


const CarouselPhotos = () => {
    return (
        <Container>
            <CarouselWrapper>
                <Carousel autoPlay interval={3000} infiniteLoop stopOnHover={false}>
                    <div>
                        <StyledImage src={galacticImg} alt="Galaktyka"/>
                    </div>
                    <div>
                        <StyledImage src={issImg} alt="Międzynarodowa Stacja Kosmiczna"/>
                    </div>
                    <div>
                        <StyledImage src={atlantisImg} alt="Prom kosmiczny Atlantis"/>
                    </div>
                    <div>
                        <StyledImage src={spaceShuttleTechnical2Img} alt="Rysunek techniczny promu kosmicznego"/>
                    </div>
                    <div>
                        <StyledImage src={walkingSpaceImg} alt="Spacer w kosmosie"/>
                    </div>
                    <div>
                        <StyledImage src={earthOnSpaceImg} alt="Ziemia z kosmosu"/>
                    </div>
                    <div>
                        <StyledImage src={galactik3Img} alt="Galaktyka 3"/>
                    </div>
                    <div>
                        <StyledImage src={galactik_2Img} alt="Galaktyka 2"/>
                    </div>
                    <div>
                        <StyledImage src={issSpaceShuttleImg} alt="prom i stacja kosmiczna"/>
                    </div>
                    <div>
                        <StyledImage src={sateliteImg} alt="Satelita"/>
                    </div>
                </Carousel>
            </CarouselWrapper>
        </Container>
    );
};

export default CarouselPhotos;