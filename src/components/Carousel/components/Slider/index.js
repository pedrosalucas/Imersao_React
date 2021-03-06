import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 15px;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
  &:hover{ 
    transform: scale(1.01);
  }
  &:focus { outline: none; }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      adaptiveHeight: true,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            infinite: true,
            centerMode: true,
            swipeToSlide: true,
            arrows: false,
            variableWidth: true,
            slidesToShow: 1
          }
        }
      ]
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 