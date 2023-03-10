import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import './styling/App.css';
import About from './components/pages/About'
import Home from './components/pages/Home'
import Contant from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PortfolioContainer from './components/PortfolioContainer'
import Work from './components/Work'

function App() {
  return (

    <Router>

      <PortfolioContainer />

    </Router>

  );
}

export default App;
