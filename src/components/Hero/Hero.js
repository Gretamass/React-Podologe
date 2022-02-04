
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import hero from '../images/hero1.JPG';
import './Hero.css';
import '../../App.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
          <div className="title">
            <div className="title1">
              Medicininis pedikiūras Kaune Pėdų priežiūros paslaugos
            </div>
            <div className="title2">
              Kvalifikuota pėdų priežiūros specialistė Julija Morozova
            </div>
            <div className="heroButton">
               <SecondaryButton  buttontext={"Skambinti"}/>
            </div>
           
          </div>
          
          <div className="titleImage">
            <img src={hero} alt="" className="image" />
          </div>
      </div>

    </div>
  );
};

export default Hero;
