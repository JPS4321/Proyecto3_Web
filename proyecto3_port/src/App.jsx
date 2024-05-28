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
  const [showNavbar, setShowNavbar] = useState(false);  

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    
    const navbarTimer = setTimeout(() => {
      setShowNavbar(true);
    }, 4000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(navbarTimer);
    };
  }, []);

  return (
    <div className="App">
      {showNavbar && <Navbar />}  
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
