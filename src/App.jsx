// Desc: Main App component
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Contact from './components/contact';
import Services from './components/Service';

function App() {

  return (
    <div className='background'>
      <NavBar />
      <Banner />
      <Gallery />
      <Info />
      <Services />
      <Contact/>
    </div>

  )
}

export default App
