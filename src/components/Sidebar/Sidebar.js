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
            <div className='sidebarLink'>Paslaugos</div>
            <div className='sidebarLink'>Kainoraštis</div>
            <div className='sidebarLink'>Atsiliepimai</div>
            <div className='sidebarLink'>Publikacijos</div>
            <div className='sidebarLink'>Apie Mus</div>
            <div className='sidebarLink'>Galerija</div>
            <div className='sidebarLink'>Kontaktai</div>

        </div>
        <div className='sideBtnWrap'>
            <div className='sidebarRoute'>Paskambinkite mums</div>
        </div>
    </div>
    );
};

export default Sidebar;
