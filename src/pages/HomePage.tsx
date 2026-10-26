import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlatformsRibbon from '../components/PlatformsRibbon';
import About from '../components/About';
import Programs from '../components/Programs';
import EducationalProposal from '../components/EducationalProposal';
import Admissions from '../components/Admissions';
import Footer from '../components/Footer';
import AdmissionPopup from '../components/AdmissionPopup';

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden' }}>
      <AdmissionPopup />
      <Navbar />
      <Hero />
      <PlatformsRibbon />
      <About />
      <Programs />
      <EducationalProposal />
      <Admissions />
      <Footer />
    </Box>
  );
}

