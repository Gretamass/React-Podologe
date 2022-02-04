import React from "react";
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ handleClick }) => {
  return (
    <div className='navigation'>
        <div className='navLink'>Podologė Julija</div>
        <div className='navIcon' onClick={handleClick}>
            <p>Menu</p>
            <div className='bars'>
                <GiHamburgerMenu />
            </div>

        </div>
    </div>
  );
};

export default Navbar;