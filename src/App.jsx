// Bibliotecas
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';

// Layout
import Footer from './layout/Footer';
import Header from './layout/Header'

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoremIpsum from './pages/generadores/LoremIpsum';
import UUID_Generator from './pages/generadores/UUIDGenerator';
import PassGenerator from './pages/generadores/PassGenerator'
import QRCodeGenerator from './pages/generadores/QRCodeGenerator';
import Base64Mod from './pages/encoders/Base64Mod';
import HashGenMod from './pages/encoders/HashGenMod';
import HMACMod from './pages/crypto/HMACMod';
import AESMod from './pages/crypto/AESMod';

function App() {
  useEffect(() => {
    // Establecer el tema oscuro de Bootstrap
    document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Router>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path='/' element={<Home searchTerm={searchTerm} />}/>
          <Route path='/loremipsum' element={<LoremIpsum/>}/>
          <Route path='/uuidgenerator' element={<UUID_Generator/>}/>
          <Route path='/passgenerator' element={<PassGenerator/>}/>
          <Route path='/qrcodegenerator' element={<QRCodeGenerator/>}/>
          <Route path='/base64mod' element={<Base64Mod/>}/>
          <Route path='/hashgenmod' element={<HashGenMod/>}/>
          <Route path='/hmacmod' element={<HMACMod/>}/>
          <Route path='/aesmod' element={<AESMod/>}/>
          {/*Ruta no existente*/}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
