import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import { servicesData  } from './components/Services/data';
import Testimonials from './components/Testimonials/Testimonials';
import { testimonialsData  } from './components/Testimonials/data';
import Articles from './components/Articles/Articles';
import { articlesData  } from './components/Articles/data';
import Pricelist from './components/Pricelist';
import { pricelistData  } from './components/Pricelist/data';
import Gallery from './components/Gallery/Gallery';
import { galleryData  } from './components/Gallery/data';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContantUs/ContactUs';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [open, setOpen] = useState(false);

const handleClick = () => {
  setOpen(!open);
};
  return (
 
      <div className="app">
        <Navbar handleClick={handleClick} />
        <Hero />

        <Services heading="Teikiamos paslaugos" buttontext="Sužinoti daugiau" data={servicesData}/>
        <Articles heading="Publikacijos" buttontext="Skaityti daugiau" data={articlesData}/>
        <Testimonials heading="Atsiliepimai" buttontext="Sužinoti daugiau" data={testimonialsData} />
        <Pricelist heading="Kainoraštis" data={pricelistData} />
        <Gallery heading="Galerija" buttontext="Žiūrėti daugiau" data={galleryData}/>
        <ContactUs heading="Susisiekite su mumis" />
        <Footer />
      </div>

  );
}

export default App;
