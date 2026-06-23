import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="bg-dark text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;