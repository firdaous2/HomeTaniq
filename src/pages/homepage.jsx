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
import frame1 from '../assets/restaurant frame.svg';
import frame2 from '../assets/walkby.svg';
import triangle from '../assets/triangle.svg';
import hotel from '../assets/hotel.svg';
import communicate from '../assets/communicate.svg';
import Navbar from '../components/navbar';

const navLine = [
  {
    title: "DISCOVER COLLECTIONS",
    image: chair
  },
  {
    title: "SHOP AT TOKYO OUTLET",
    image: cart
  },
  {
    title: "SEARCH BY BRAND",
    image: search
  },
  {
    title: "CONSULT FOR INTERIOR",
    image: pencil
  }
]

const digitalSpace = [
  {
    image: frame1,
    title: "In Tokyo: 456 Shibuya Street, Minato City, Tokyo",
    subTitle: "DISCOVER THE SHOWROOM",
    subImage: arrow
  },
  {
    image: frame2,
    title: "DISCOVER US",
    subTitle: "OUR HISTORY",
    subImage: arrow
  },
]

const communicateSpace = [
  {
    image: triangle,
    title: "We cater to every need, from a single room to complete renovations",
    buttonTitle: "Design Expertise",
    buttonImage: arrow
  },
  {
    image: hotel,
    title: "Revamp hotels, offices, and commercial spaces with our specialized support",
    buttonTitle: "Professional Solutions",
    buttonImage: arrow
  },
  {
    image: communicate,
    title: "Get personalized assistance, It is now available on WhatsApp too! Get in Touch",
    buttonTitle: "Connect Now",
    buttonImage: arrow
  },
]

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

  div {
    font-size: 25px;
  }
  div:nth-child(1) {
    margin-top: 30px;
    }
  div:nth-child(2) {
    img{
      height: 55dvh;
      width: 100%;
    }
  }
`;
const Showcase = styled.div`
`
const Digital = styled.div`
  background-color: #F6F6F0;
  padding: 20px;
  .header{
    text-align: center;
    font-size: 28px;
    font-weight: 500;
  }
  .dig-images{
    width: 90%;
    display: flex;
    margin: auto;
    margin-top: 40px;
    gap: 3px;
    justify-content: space-around;
    div img{
      height: 80dvh;
    }
    div.cont{
      height: 90px;
      width: 85%;
      margin: auto;
      display:flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      transform: translateY(-50%);
      padding: 0px 20px;
      font-size: 16px;
      font-weight: 400;
      flex-direction: column;
      gap: 8px;
    }
    div.next{
      font-size: 14px;
      gap: 10px;
      img{
        width: 6px;
        height: 20px;
      }
    }
  }
  div.communicate{
    padding: 20px 100px; 
    display: flex;
    justify-content: space-between;
    width: 100%;
    div.each{
     width: 30%;
      >div{
        gap: 15px;
        padding: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        div.text{
          font-size: 18px;
        }
        .next{
          gap: 6px;
          background-color: white;
          padding: 3px 15px;
          border-radius: 13px;
          font-size: 14px;
          img{
            margin-top: 3px;
          }
        }
      }
    }
  }
  `

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
          {navLine.map((nav, index) => (
            <div className="d-flex gap-2" key={index}>
              <img src={nav.image} alt="" />
              <p className='mt-3'>{nav.title}</p>
            </div>
          ))}
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
      <Showcase>
      </Showcase>

      <Digital>
        <div className='header'>Unifying physicality, digital space for ideal synergy.</div>
        <div className="dig-images">
          {digitalSpace.map((digital, index) => (
            <div key={index}>
              <img src={digital.image} alt="" />
              <div className="cont">
                {digital.title}
                <div className="d-flex next">
                  {digital.subTitle}
                  <img src={digital.subImage} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="communicate">
          {communicateSpace.map((commune, index)=>(
          <div className="each">
            <div>
              <img src={commune.image} alt="" />
              <div className='text'>{commune.title}</div>
              <div className="next butn d-flex">
                {commune.buttonTitle}
                <img src={commune.buttonImage} alt="" />
              </div>
            </div>
          </div>
          ))}
        </div>
      </Digital>

    </HomepageContainer>
  );
}

export default Homepage;