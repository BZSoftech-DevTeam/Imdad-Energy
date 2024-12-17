import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Loader from './components/Loader';
import Header from './components/Header'
import Home from './Pages/Home/HomeContainer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
