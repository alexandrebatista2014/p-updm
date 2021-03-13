import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Assets/Scss/App.scss';

// Páginas e Componentes
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Home';
import Apousada from './Apousada';
import Erro404 from './Erro404';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Apousada" element={<Apousada />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
