import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import PopularTools from './components/home/PopularTools';
import Categories from './components/home/Categories';
import Newsletter from './components/home/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <PopularTools />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;