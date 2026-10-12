import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import { Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LevelInicial from './pages/LevelInicial';
import LevelPrimaria from './pages/LevelPrimaria';
import LevelSecundaria from './pages/LevelSecundaria';
import EducationalProposalPage from './pages/EducationalProposal';
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
        {/* Propuesta Educativa Routes */}
        <Route path="/propuesta-educativa" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo" replace />} />
        <Route path="/propuesta-educativa/areas-de-desarrollo" element={<EducationalProposalPage />} />
        <Route path="/propuesta-educativa/academica" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo" replace />} />
        <Route path="/propuesta-educativa/areas-academicas" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo#areas-academicas" replace />} />
        <Route path="/propuesta-educativa/formativa" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo#formativa" replace />} />
        <Route path="/propuesta-educativa/deportiva" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo#deportiva" replace />} />
        <Route path="/propuesta-educativa/talleres-curriculares" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo#talleres-curriculares" replace />} />
        <Route path="/propuesta-educativa/certificaciones" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo#certificaciones" replace />} />
        <Route path="/propuesta-educativa/ensamblaje-de-cuerdas" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo#ensamblaje-de-cuerdas" replace />} />
        <Route path="/metodologia" element={<Navigate to="/propuesta-educativa/areas-de-desarrollo" replace />} />
        <Route path="/admision" element={<AdmissionsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
