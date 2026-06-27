// Bibliotecas
import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';

// Layout 
import Footer from './layout/Footer';
import Header from './layout/Header'

// Páginas con lazy (importarán solo cuando se vaya a la página)
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const LoremIpsum = lazy(() => import('./pages/generadores/LoremIpsum'));
const UUID_Generator = lazy(() => import('./pages/generadores/UUIDGenerator'));
const PassGenerator = lazy(() => import('./pages/generadores/PassGenerator'))
const QRCodeGenerator = lazy(() => import('./pages/generadores/QRCodeGenerator'));
const Base64Mod = lazy(() => import('./pages/encoders/Base64Mod'));
const HashGenMod = lazy(() => import('./pages/encoders/HashGenMod'));
const HMACMod = lazy(() => import('./pages/crypto/HMACMod'));
const AESMod = lazy(() => import('./pages/crypto/AESMod'));
const JWTMod = lazy(() => import('./pages/crypto/JWTMod'));
const JSONFormatter = lazy(() => import('./pages/formatters/JSONFormatter'));
const BcryptMod = lazy(() => import('./pages/crypto/BcryptMod'));

// Spinner simple para mostrar mientras se carga la página
const PageLoader = () => (
  <div className="text-center my-5 py-5 text-secondary">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Cargando herramienta...</span>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Establecer el tema oscuro de Bootstrap
    document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <HelmetProvider>
      <Router>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {/* El Suspense envuelve las rutas para manejar la espera asíncrona */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm} />} />
            <Route path='/loremipsum' element={<LoremIpsum />} />
            <Route path='/uuidgenerator' element={<UUID_Generator />} />
            <Route path='/passgenerator' element={<PassGenerator />} />
            <Route path='/qrcodegenerator' element={<QRCodeGenerator />} />
            <Route path='/base64mod' element={<Base64Mod />} />
            <Route path='/hashgenmod' element={<HashGenMod />} />
            <Route path='/hmacmod' element={<HMACMod />} />
            <Route path='/aesmod' element={<AESMod />} />
            <Route path='/jwtmod' element={<JWTMod />} />
            <Route path='/jsonformatter' element={<JSONFormatter />} />
            <Route path='/bcryptmod' element={<BcryptMod />} />
            {/*Ruta no existente*/}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router >
    </HelmetProvider>
  );
}

export default App
