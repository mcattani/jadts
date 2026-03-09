// Bibliotecas
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Layout
import Footer from './layout/Footer';
import Header from './layout/Header'

// Pages
import LoremIpsum from './pages/generadores/LoremIpsum';

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
          {/*<Route path='/' element={<Home/>}/>}*/}
          <Route path='/loremipsum' element={<LoremIpsum/>}/>
          {/*Ruta no existente*/}
          {/*<Route path='*' element={<NotFound />} />*/}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
