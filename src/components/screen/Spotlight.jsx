import React from "react";
import styled from "styled-components";

import Header from "../include/Header";

import background1 from "../../asessts/images/background1.jpg";
import background2 from "../../asessts/images/background2.jpg";
import background3 from "../../asessts/images/background3.jpg";
import background4 from "../../asessts/images/background4.jpg";
// ---images---
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// ---slider--

import { Link } from "react-router-dom";
//---Link--

function Spotlight() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
  };
  return (
    <div>
      <Header />
      <MainContainer>
        <Slider {...settings}>
          <TotalContain>
            <ImageContainer>
              <Image src={background1} alt="images" />
            </ImageContainer>
          </TotalContain>
          <TotalContain>
            <ImageContainer>
              <Image src={background2} alt="images" />
            </ImageContainer>
          </TotalContain>
          <TotalContain>
            <ImageContainer>
              <Image src={background3} alt="images" />
            </ImageContainer>
          </TotalContain>
          <TotalContain>
            <ImageContainer>
              <Image src={background4} alt="images" />
            </ImageContainer>
          </TotalContain>
        </Slider>
        <DivText>
          <Sentence>
            Crypto is India’s fastest growing internet commerce company and we
            are here to make E-Commerce accessible to everyone. Our vision is to
            enable 100 million small businesses in India, including individual
            entrepreneurs, to succeed online.
          </Sentence>
          <ShopButton to="/product">Shop Now</ShopButton>
        </DivText>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div``;
const TotalContain = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const DivText = styled.div`
  position: absolute;
  top: 50px;

  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Sentence = styled.p`
  font-size: 18px;
  color: #fff;
  width: 34%;
  font-weight: 600;

  color: #fff;
`;

const ShopButton = styled(Link)`
  height: 40px;
  font-size: 19px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  width: 120px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #b986bf;
    color: #fff;
  }
`;

export default Spotlight;
