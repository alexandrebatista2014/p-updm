import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Assets/Scss/App.scss';

// Páginas e Componentes
import Header from './Componentes/Header';
import Footer2 from './Componentes/Footer2';
import Home from './Home';
import Apousada from './Views/Apousada';
import Acomodacao from './Views/Acomodacao';
import Lazer from './Views/Lazer';
import Contato from './Views/Contato';
import Erro404 from './Erro404';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Apousada" element={<Apousada />} />
        <Route path="Acomodacao" element={<Acomodacao />} />
        <Route path="Lazer" element={<Lazer />} />
        <Route path="Contato" element={<Contato />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
