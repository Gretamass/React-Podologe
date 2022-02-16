import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logoNav.png';
import { 

    Bars
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <div className='header'>
        <div className='headerContainer'> 
            <div className='navbar'>   
                <div className='navInfo'>
                    <div className='logo'>
                    <Link to="/"><img src={logo} alt="podologe logo" className='logoHeader' /></Link>
                    </div>
                    <Link to="/"><div className='titleNav' to='/'>Podologė Julija</div></Link>
                </div>

                <div className='nav'>
                    <Link to="/services" className='navigation'>Paslaugos</Link>
                    <Link to="/price-list" className='navigation'>Kainoraštis</Link>
                    <Link to="/testimonials" className='navigation'>Atsiliepimai</Link>
                    <Link to="/articles" className='navigation'>Publikacijos</Link>
                    <Link to="/about-us" className='navigation'>Apie Mus</Link>
                    <Link to="/gallery" className='navigation'>Galerija</Link>
                    <Link to="/contact-us" className='navigation'>Kontaktai</Link>
                </div>
                <div className="NavIcon"onClick={toggle} >
                    
                    <Bars />
                </div>
            </div>
      </div>
    </div>
  );
};

export default Navbar;