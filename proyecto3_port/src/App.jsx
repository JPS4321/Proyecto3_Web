import React, { Suspense, useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/FirstPage/Header';
const SecondPage = React.lazy(() => import('./Components/SecondPage/SecondPage'));
const ThirdPage = React.lazy(() => import('./Components/ThirdPage/ThirdPage'));
import Sidebar from './Components/Sidebar/Sidebar';
import FourthPage from './Components/FourthPage/FourthPage';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);  // Nuevo estado para controlar la visibilidad del Navbar

  useEffect(() => {
    // Timer para controlar la carga de los componentes tras el Suspense
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Timer específico para el Navbar
    const navbarTimer = setTimeout(() => {
      setShowNavbar(true);
    }, 4000); // Ajusta a 4 segundos como en tu lógica original

    return () => {
      clearTimeout(timer);
      clearTimeout(navbarTimer);
    };
  }, []);

  return (
    <div className="App">
      {showNavbar && <Navbar />}  // Renderiza Navbar solo después de 4 segundos
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        {!loading && (
          <>
            <Sidebar/>
            <SecondPage />
            <ThirdPage />
            <FourthPage/>
          </>
        )}
      </Suspense>
    </div>
  );
}

export default App;
