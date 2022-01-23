import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #292929;
  font-size: 2rem;
  font-weight:500;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  height:80px;
  width:min-content;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #292929;
  justify-content: center;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(GiHamburgerMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;