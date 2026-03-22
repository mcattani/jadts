// Bibliotecas
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Layout
import Footer from './layout/Footer';
import Header from './layout/Header'

// Pages
import Home from './pages/Home';
import LoremIpsum from './pages/generadores/LoremIpsum';
import UUID_Generator from './pages/generadores/UUIDGenerator';
import PassGenerator from './pages/generadores/PassGenerator'
import QRCodeGenerator from './pages/generadores/QRCodeGenerator';

function App() {
  useEffect(() => {
    // Establecer el tema oscuro de Bootstrap
    document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/loremipsum' element={<LoremIpsum/>}/>
          <Route path='/uuidgenerator' element={<UUID_Generator/>}/>
          <Route path='/passgenerator' element={<PassGenerator/>}/>
          <Route path='/qrcodegenerator' element={<QRCodeGenerator/>}/>
          {/*Ruta no existente*/}
          {/*<Route path='*' element={<NotFound />} />*/}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
