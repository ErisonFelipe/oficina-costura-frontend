import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StitchProgress } from './components/ui/StitchProgress';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { Gallery } from './sections/Gallery';
import { Highlight } from './sections/Highlight';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] relative">
      <StitchProgress />
      <Header />
      <main className="relative z-10">
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
