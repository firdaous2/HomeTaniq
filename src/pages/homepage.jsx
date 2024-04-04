import React from 'react';
import styled from 'styled-components';
import Topbar from '../components/topbar';
import Navbar from '../components/navbar';

import heroImg from '../assets/heroImg.png';
import arrow from '../assets/arrow.svg';
import chair from '../assets/chair.svg';
import cart from '../assets/cart.svg';
import search from '../assets/search.svg';
import pencil from '../assets/pencil.svg';
import art from '../assets/art.svg';
import frame1 from '../assets/restaurant frame.svg';
import frame2 from '../assets/walkby.svg';
import frame3 from '../assets/frame3.svg';
import frame4 from '../assets/frame4.svg';
import triangle from '../assets/triangle.svg';
import hotel from '../assets/hotel.svg';
import communicate from '../assets/communicate.svg';
import brand1 from '../assets/brand1.svg';
import brand2 from '../assets/brand2.svg';
import brand3 from '../assets/brand3.svg';
import brand4 from '../assets/brand4.svg';
import brand5 from '../assets/brand5.svg';
import brand6 from '../assets/brand6.svg';
import brand7 from '../assets/brand7.svg';
import brand8 from '../assets/brand8.svg';
import sofa from '../assets/sofa.svg';
import pouf from '../assets/pouf.svg';
import armChair from '../assets/armChair.svg';
import Sofabed from '../assets/Sofabed.svg';

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
];

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
];

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
];

const articleSpace = [
  {
    image: frame3,
    title: "MODERN LIVING ROOM IN TOKYO",
    subTitle: "GO TO ARTICLE",
    subImage: arrow
  },
  {
    image: frame4,
    title: "CONDE HOUSE EPTOMIZES STATE-OF-THE-ART INDOOR AND OUTDOOR FURNITURE CRAFTMANSHIP",
    subTitle: "GO TO ARTICLE",
    subImage: arrow,
    id: 'width',
    id2: 'imgcont'
  },
];

const brandSpace = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];
const FoamCategory = [sofa, pouf, armChair, Sofabed];

const carousel = [
  {
    image: sofa,
    title: "card title 2",
    type: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button:"Go somewhere"
  },
  {
    image: sofa,
    title: "card title 2",
    type: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button:"Go somewhere",
    className: "inactive"
  },
  {
    image: sofa,
    title: "card title 2",
    type: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button:"Go somewhere",
    className: "inactive"
  },
  {
    image: sofa,
    title: "card title 2",
    type: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button:"Go somewhere",
    className: "inactive"
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
`;

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
`;

const Article = styled.div`
  margin-top: 20px;
  padding: 50px 0px;
  background-color: #E5E0D8;
  .dig-images{
    width: 90%;
    display: flex;
    margin: auto;
    margin-top: 40px;
    margin-left: 10%;
    gap: 3px;
    justify-content: space-around;
    div img{
      height: 80dvh;
    }
    div img#width{
      height: 60dvh;
      margin-top: 50px;
    }
    div#imgcont{
      div.cont{
        width: 50%;
        transform: translate(-42%, -50%);
        font-size: 13px;
        text-align: center;  
      }
      margin-left: 10%;
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
      // font-weight: 400;
      flex-direction: column;
      gap: 8px;
      text-align: center;
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
  div.heading{
    text-align: center;
    font-size: 35px;
    font-weight: 500;
  } 
  button{
    margin: auto;
    display: flex;
    background: transparent;
    padding: 8px 26px;
    border: 1.5px solid black;
    border-radius: 22px;
    font-weight: 400;
  }
`;

const Brands = styled.div`
  margin: 50px 0px;
  div.heading {
    text-align: center;
    font-size: 35px;
    font-weight: 500;
  }

  div.indibrand {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
  }

  img {
    height: 37px;
    width: auto;
  }
  button{
    margin: auto;
    display: flex;
    background: transparent;
    padding: 8px 26px;
    border: 1.5px solid black;
    border-radius: 22px;
    font-weight: 400;
    margin-top: 40px;
  }
`;

const Shop = styled.div`
  margin: 50px 30px;
  div.heading {
    text-align: center;
    font-size: 35px;
    font-weight: 500;
  }
  div.titleHead{
    margin-top: 35px;
    font-size: 23px;
  }
  div.foams{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    img{
      width: 24%;
    }
  }
`;

const Product = styled.div`
  margin: 50px 30px;
  div.titleHead{
    margin-top: 35px;
    font-size: 23px;
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
          {communicateSpace.map((commune, index) => (
            <div className="each" key={index}>
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

      <Article>
        <div className="heading">
          Metropolis Tokyo
        </div>
        <div className="dig-images">
          {articleSpace.map((article, index) => (
            <div key={index} id={article.id2}>
              <img src={article.image} alt="" id={article.id} />
              <div className="cont">
                {article.title}
                <div className="d-flex next">
                  {article.subTitle}
                  <img src={article.subImage} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button>
          READ ALL ARTICLES
        </button>
      </Article>

      <Brands>
        <div className="heading">
          Our top brands
        </div>
        <div className="indibrand" style={{ justifyContent: 'center' }}>
          {brandSpace.map((brand, index) => (
            <img src={brand} alt={`Brand ${index}`} key={index} />
          ))}
        </div>
        <button>
          SEE ALL
        </button>
      </Brands>

      <Shop>
        <div className="heading">
          Our Online Shop
        </div>
        <div className="titleHead">
          Browse by your categories
        </div>
        <div className="foams">
          {FoamCategory.map((foam, index) => (
            <img src={foam} alt={`Foam ${index}`} key={index} />
          ))}
        </div>
      </Shop>
      <Product>
        <div className="titleHead">
          Browse by your categories
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride= "carousel">
          <div className="carousel-inner">

            {carousel.map((caro, index)=>(
            <div className="carousel-item active {inactive}"  key={index}>
              <div class="card">
                <img src={caro.image} class="d-block w-100" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{caro.title}</h5>
                  <p class="card-text">{caro.type}</p>
                  <a href="#" class="btn btn-primary">{caro.button}</a>
                </div>
              </div>
            </div>
            ))}
            {/* <div className="carousel-item">
              <div class="card">
                <img src={armChair} class="d-block w-100" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title 2</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div> */}
            {/* <div className="carousel-item">
              <div class="card">
                <img src={Sofabed} class="d-block w-100" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title 2</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div> */}
            {/* <div className="carousel-item">
              <div class="card">
                <img src={Sofabed} class="d-block w-100" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title 2</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div> */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Product>
    </HomepageContainer>
  );
}

export default Homepage;
