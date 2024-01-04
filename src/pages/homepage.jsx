import React from 'react';
import Topbar from '../components/topbar';
import styled from 'styled-components';
import heroImg from '../assets/heroImg.png';
import Navbar from '../components/navbar';

const HomepageContainer = styled.div`
  width: 100%;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
`;

const HeroText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  z-index: 2;
`;

function Homepage() {
  return (
    <HomepageContainer>
      <Topbar />
      <Hero>
        <HeroImage src={heroImg} alt="" />
        <HeroText>
          <Navbar></Navbar>
        </HeroText>
      </Hero>
    </HomepageContainer>
  );
}

export default Homepage;
