import React from 'react';

import About from './components/pages/About'
import Home from './components/pages/Home'
import Contant from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from './components/Work'

const PortfolioContainer = () => {

  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* Page  */}
      <div className="page-wrapper">
       <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Work />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer  />
    </>
  )
}

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

export default PortfolioContainer;