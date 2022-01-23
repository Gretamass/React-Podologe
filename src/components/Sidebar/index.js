import React from 'react';
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
            <SidebarLink to="/">Paslaugos</SidebarLink>
            <SidebarLink to="/">Kainoraštis</SidebarLink>
            <SidebarLink to="/">Atsiliepimai</SidebarLink>
            <SidebarLink to="/">Publikacijos</SidebarLink>
            <SidebarLink to="/">Apie Mus</SidebarLink>
            <SidebarLink to="/">Galerija</SidebarLink>
            <SidebarLink to="/">Kontaktai</SidebarLink>
            
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/">Paskambinkite mums</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
