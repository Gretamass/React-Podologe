import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';
import Paslaugos from './components/Paslaugos';
import { paslaugosData  } from './components/Paslaugos/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Paslaugos heading="Teikiamos paslaugos" buttontext="Sužinoti daugiau" data={paslaugosData}/>
    </Router>
  );
}

export default App;
