import React, { useState } from 'react';
import NavBar from '../Navbar';
import Sidebar from '../Sidebar';
import ImgHero from '../images/hero1.JPG';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn,
    HeroImage,
    ImageDiv,
    Img
} from './HeroElements'



const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <div>
            <HeroContainer>
                <NavBar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Medicininis pedikiūras Kaune Pėdų priežiūros paslaugos</HeroH1>
                        <HeroP>Kvalifikuota pėdų priežiūros specialistė Julija Morozova</HeroP>
                        <HeroBtn>Užsirašyti</HeroBtn>
                    </HeroItems>
                    <HeroImage>
                        <ImageDiv>
                        <Img src={ImgHero} />
                        </ImageDiv>
                    </HeroImage>
                </HeroContent>
            </HeroContainer>
        </div>);
};

export default Hero;
