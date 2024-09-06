import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section><Intro /></section>
      <section><Features /></section>
      <section><Footer /></section>
    </div>
  );
}

export default App;
