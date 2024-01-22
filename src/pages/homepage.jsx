import React from 'react';
import Topbar from '../components/topbar';
import styled from 'styled-components';
import heroImg from '../assets/heroImg.png';
import arrow from '../assets/arrow.svg';
import chair from '../assets/chair.svg';
import cart from '../assets/cart.svg';
import search from '../assets/search.svg';
import pencil from '../assets/pencil.svg';
import art from '../assets/art.svg';
import Navbar from '../components/navbar';

const HomepageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 93vh;
  display: block;
  position: relative;
  z-index: 1;
`;

const HeroText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  z-index: 2;
`;

const Explore = styled.div`
  margin-bottom: 150px;
  position: absolute;
  bottom: 0;
  transform: translate(50%, 0%);
  p:nth-child(2) {
    font-size: 15px;
    transform: translate(0%, -50%);
  }
  button {
    padding: 12px 30px;
    border-radius: 35px;
    transform: translate(0%, -30%);
  }
`;

const Welcome = styled.div`
  width: 100%;
  margin-top: 25px;
  div:nth-child(1) {
    justify-content: space-evenly;
    div {
      p {
        letter-spacing: -1px;
        font-size: 16px;
      }
    }
    div {
      width: 100%;
      display: flex;
    }
  }
`;

const Art = styled.div`
  margin-top: 70px;
  display: flex;
  // background-color: red;

  div {
    font-size: 25px;
    // background-color: blue;


  }

  div:nth-child(1) {
    margin-top: 30px;
    }

  div:nth-child(2) {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    img{
      height: 55dvh;
      width: 100%;
    }
  }
`;

function Homepage() {
  return (
    <HomepageContainer>
      <Topbar />
      <Hero>
        <HeroImage src={heroImg} alt="" />
        <HeroText>
          <Navbar />
          <Explore className='mb-5'>
            <p className='display-5'>Elevate Everyday</p>
            <p className=''>AT HOMETANIQ, EVERY MOMENT MATTERS!</p>
            <button type="button" className="btn btn-light d-flex gap-3">
              Explore Now
              <img src={arrow} alt="" className='mt-2' />
            </button>
          </Explore>
        </HeroText>
      </Hero>
      <Welcome className='container-fluid' id='icons'>
        <div className="col-md-12 col-sm-4 d-flex">
          <div className="d-flex gap-2">
            <img src={chair} alt="" />
            <p className='mt-3'>DISCOVER COLLECTIONS</p>
          </div>
          <div className="d-flex gap-2">
            <img src={cart} alt="" />
            <p className='mt-3'>SHOP AT TOKYO OUTLET</p>
          </div>
          <div className="d-flex gap-2">
            <img src={search} alt="" />
            <p className='mt-3'>SEARCH BY BRAND</p>
          </div>
          <div className="d-flex gap-2">
            <img src={pencil} alt="" />
            <p className='mt-3'>CONSULT FOR INTERIOR</p>
          </div>
        </div>

        <Art className='d-flex'>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div>
              Welcome to HOMETANIQ, where design and furnishings intertwine
            </div>
            <div className="mt-3">
              Since 1945, we've been your partner in shaping homes. Thank you for entrusting us with your vision.
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={art} alt="" />
          </div>
        </Art>
      </Welcome>
    </HomepageContainer>
  );
}

export default Homepage;
