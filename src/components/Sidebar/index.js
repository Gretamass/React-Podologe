import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import './Sidebar.css';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
  } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/" className='sidebarLink'>Paslaugos</SidebarLink>
            <SidebarLink to="/" className='sidebarLink'>Kainoraštis</SidebarLink>
            <SidebarLink to="/" className='sidebarLink'>Atsiliepimai</SidebarLink>
            <SidebarLink to="/" className='sidebarLink'>Publikacijos</SidebarLink>
            <SidebarLink to="/" className='sidebarLink'>Apie Mus</SidebarLink>
            <SidebarLink to="/" className='sidebarLink'>Galerija</SidebarLink>
            <SidebarLink to="/" className='sidebarLink'>Kontaktai</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SecondaryButton buttontext="Skambinti" />
        </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
