import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { Gallery } from './sections/Gallery';
import { Highlight } from './sections/Highlight';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Highlight />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;