import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Methodology from '../components/Methodology';
import Admissions from '../components/Admissions';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Methodology />
      <Admissions />
      <Footer />
    </Box>
  );
}
