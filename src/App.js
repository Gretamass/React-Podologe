import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
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
import Sidebar from './components/Sidebar/index';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  
  return (
      <Router>

            <div className="app">
           
            <Navbar toggle={toggle}/>
            <Sidebar  isOpen={isOpen} toggle={toggle} />
            <Routes>
              <Route path="/" element={<><Hero/><Services heading="Teikiamos paslaugos" buttontext="Sužinoti daugiau" data={servicesData}/><Articles heading="Publikacijos" buttontext="Skaityti daugiau" data={articlesData}/><Testimonials  heading="Atsiliepimai" buttontext="Sužinoti daugiau" data={testimonialsData} /><Pricelist  heading="Kainoraštis" data={pricelistData} /><Gallery heading="Galerija" buttontext="Žiūrėti daugiau" data={galleryData}/><ContactUs heading="Susisiekite su mumis" /></>}> 
              </Route>

              <Route path="/services" element={<><Services heading="Teikiamos paslaugos" buttontext="Sužinoti daugiau" data={servicesData}/></>}> 
              </Route>

              <Route path="/articles" element={<><Articles heading="Publikacijos" buttontext="Skaityti daugiau" data={articlesData}/></>}> 
              </Route>

              <Route path="/testimonials" element={<><Testimonials heading="Atsiliepimai" buttontext="Sužinoti daugiau" data={testimonialsData}/></>}> 
              </Route>

              <Route path="/price-list" element={<><Pricelist heading="Kainoraštis" data={pricelistData}/></>}> 
              </Route>

              <Route path="/gallery" element={<><Gallery heading="Galerija" buttontext="Žiūrėti daugiau" data={galleryData}/></>}> 
              </Route>

              <Route path="/contact-us" element={<><ContactUs heading="Susisiekite su mumis" /></>}> 
              </Route>
            
            </Routes>

            <Footer />
          </div>
  
          
      </Router>


  );
}

export default App;
