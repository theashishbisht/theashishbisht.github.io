
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </MainLayout>
  );
};

export default Index;
