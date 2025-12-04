import React from 'react';
import './App.css';

// コンポーネントのインポート
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Background />
      <Header />
      <Hero />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;