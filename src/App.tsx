import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LevelInicial from './pages/LevelInicial';
import LevelPrimaria from './pages/LevelPrimaria';
import LevelSecundaria from './pages/LevelSecundaria';
import MethodologyPage from './pages/Methodology';
import AdmissionsPage from './pages/AdmissionsPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/inicial" element={<LevelInicial />} />
        <Route path="/primaria" element={<LevelPrimaria />} />
        <Route path="/secundaria" element={<LevelSecundaria />} />
        <Route path="/metodologia" element={<MethodologyPage />} />
        <Route path="/admision" element={<AdmissionsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
