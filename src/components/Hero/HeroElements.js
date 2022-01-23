import styled from 'styled-components';
import ImgHero from '../images/hero1.JPG';



export const HeroContainer = styled.div`
  background-color:rgb(241, 241, 241);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  flex-direction: row;
  align-items:center;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-center;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 50%;
  color: #292929;
  text-transform: uppercase;
  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroImage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:flex-center;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 50%;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;


export const ImageDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 100%;
height: 80%;


`

export const Img = styled.img`

height: auto;

min-width: 300px;
max-width: 100%;
border-radius:10px;

`


export const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 10vw, 2.0rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  font-weight:500;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  width: fit-content;
  border: none;
  border-radius: 20px;
  background: #8082BB;
  color: rgb(241, 241, 241);
  transition: 0.2s ease-out;
  &:hover {
    background: #8f8fa6;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #292929;
  }
`;