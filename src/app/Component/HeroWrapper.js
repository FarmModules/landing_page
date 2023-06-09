import Card from './Card';
import Hero from './Hero';
import About from './About';
import Team from './Teams';
import ContactUs from './ContactUs';

const HeroWrapper = () => {
  // Marking the HeroWrapper component as a Client Component
  return (
    <>
      <Hero />
      <Card />
      <About />
      <Team />
      <ContactUs />
    </>
  );
};

export default HeroWrapper;
