import React from 'react';
import './App.css';

// コンポーネントのインポート
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
// import Slider from './components/Slider'

function App() {
  return (
    <div className="app">
      <Background />
      <Header />
      <Hero />
      <Activities />
      <h2 className='section-title'>CONTENTS</h2>
      <Carousel />
      <Footer />

    </div>
  );
}

export default App;