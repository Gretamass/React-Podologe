import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const sidebarVariants = {
    sidebarOpen: {
      width: "200px",
      transition: {
        when: "beforeChildren",
      },
    },
  
    sidebarClosed: {
      width: "",
    },
  };
  
  const LinkBoxVariants = {
    sidebarOpen: {
      x: 30,
      opacity: 1,
    },
    sidebarClosed: {
      x: -100,
      opacity: 0,
    },
  };

const Sidebar = ({ open }) => {
  return (
    <div    className='sidebarContainer'       
            variants={sidebarVariants}
            animate={open ? "sidebarOpen" : "sidebarClosed"}>
        <div className='icon'>
            <div className='closeIcon'>FaTimes</div>
        </div>
        <div className='sidebarMenu' variants={LinkBoxVariants}>
            <Link to="/services" className='sidebarLink'>Paslaugos</Link>
            <Link to="/price-list"  className='sidebarLink'>Kainoraštis</Link>
            <Link to="/testimonials"  className='sidebarLink'>Atsiliepimai</Link>
            <Link to="/articles"  className='sidebarLink'>Publikacijos</Link>
            <Link to="/about-us" className='sidebarLink'>Apie Mus</Link>
            <Link to="/gallery" className='sidebarLink'>Galerija</Link>
            <Link to="/contact-us" className='sidebarLink'>Kontaktai</Link>

        </div>
        <div className='sideBtnWrap'>
            <div className='sidebarRoute'>Paskambinkite mums</div>
        </div>
    </div>
    );
};

export default Sidebar;
