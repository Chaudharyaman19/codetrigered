import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <ContactForm />
    </main>
  );
};

export default Home;