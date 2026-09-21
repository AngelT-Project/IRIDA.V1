import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Introduction, About } from '@/components/Introduction';
import Suites from '@/components/Suites';
import { Experiences, Lifestyle } from '@/components/Experiences';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Booking from '@/components/Booking';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="bg-warm-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Suites />
        <Experiences />
        <Lifestyle />
        <Gallery />
        <Location />
        <Booking />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
