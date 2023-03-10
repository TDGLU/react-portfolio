import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import './styling/App.css';
import About from './components/pages/About'
import Home from './components/pages/Home'
import Contant from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from './components/Work'

function App() {
  return (
    <>
      <Navbar />

      {/* Page  */}
      <div className="page-wrapper">
       <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/projects" element={<Work />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer  />
    </>
  )
}

export default App;
