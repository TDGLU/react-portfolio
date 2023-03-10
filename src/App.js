import React from 'react';
import './styling/App.css';
import About from './components/pages/About'
import Home from './components/pages/Home'
import Contant from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      {/* Page  */}
      <div className="page-wrapper">
        <Navbar />
        <Work />
        <About />
      </div>

      <Footer  />
    </>
  )
}

export default App;