import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PublicIcon from '@mui/icons-material/Public';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LevelSecundaria: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      <main>
        {/* Modern Hero Section */}
        <Box 
          sx={{ 
            position: 'relative',
            bgcolor: 'secondary.main', 
            color: 'white', 
            pt: { xs: 15, md: 25 }, 
            pb: { xs: 12, md: 20 },
            backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.75), rgba(10, 31, 68, 0.9)), url(https://images.unsplash.com/photo-1523050335102-c884af17d222?auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            clipPath: { md: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' },
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: 850 }} data-aos="fade-up">
              <Typography 
                variant="overline" 
                sx={{ 
                  letterSpacing: '0.4em', 
                  fontWeight: 800, 
                  color: 'primary.light', 
                  display: 'block', 
                  mb: 2,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                LIDERAZGO Y EXCELENCIA
              </Typography>
              <Typography variant="h1" sx={{ mt: 1, mb: 4, fontSize: { xs: '3.5rem', md: '5.5rem' }, fontWeight: 900, lineHeight: 1 }}>
                Nivel Secundaria: <br/> <Box component="span" sx={{ color: 'primary.light' }}>Forjando el Futuro</Box>
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.6, mb: 6, fontSize: { xs: '1.1rem', md: '1.4rem' } }}>
                Preparación pre-universitaria integral con enfoque en certificaciones internacionales, liderazgo ético y competencias digitales de alto nivel.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  href="/admision"
                  sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 2, fontWeight: 800, '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
                >
                  Proceso Admisión 2026
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  href="/metodologia"
                  sx={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', px: 5, py: 2, fontWeight: 800, '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  Propuesta Académica
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* High Performance Stats Strip */}
        <Container maxWidth="lg" sx={{ mt: { md: -8 }, mb: 12, position: 'relative', zIndex: 2 }}>
          <Grid container spacing={0} sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
            {[
              { label: 'Enfoque', value: 'Pre-U', color: '#046bd2' },
              { label: 'Inglés', value: 'TOEFL ITP', color: '#0356a8' },
              { label: 'Pilar', value: 'Liderazgo', color: '#024281' },
              { label: 'Formación', value: 'Integral', color: '#012e5a' }
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, md: 3 }} key={idx}>
                <Box sx={{ bgcolor: stat.color, p: 4, textAlign: 'center', color: 'white' }}>
                  <Typography variant="overline" sx={{ opacity: 0.8, fontSize: '0.7rem' }}>{stat.label}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>{stat.value}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Preparation for the Real World */}
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
              <Box sx={{ position: 'relative' }}>
                <Box 
                  component="img" 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" 
                  sx={{ width: '100%', borderRadius: 8, boxShadow: '0 40px 80px rgba(0,0,0,0.15)', position: 'relative', zIndex: 2 }} 
                />
                <Box sx={{ position: 'absolute', bottom: -30, right: -30, width: 250, height: 250, bgcolor: 'primary.light', opacity: 0.1, borderRadius: 4, zIndex: 1 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.15em' }}>
                    SÉ EL PROTAGONISTA
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, mt: 1, color: 'secondary.main' }}>
                    Preparación Pre-U de Alto Nivel
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.2rem' }}>
                  Nuestros estudiantes de Secundaria no solo adquieren conocimientos, desarrollan la madurez y la disciplina necesaria para el éxito universitario. El Colegio Hosanna ofrece una formación equilibrada entre el rigor académico y la formación del carácter cristiano.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Card sx={{ p: 3, flex: '1 1 250px', bgcolor: 'rgba(4,107,210,0.02)', border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <WorkspacePremiumIcon color="primary" /> Certificación TOEFL
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Como centro autorizado, preparamos a los alumnos para certificarse internacionalmente en el dominio del inglés.
                    </Typography>
                  </Card>
                  <Card sx={{ p: 3, flex: '1 1 250px', bgcolor: 'rgba(4,107,210,0.02)', border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PsychologyIcon color="primary" /> Orientación Vocacional
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Acompañamiento especializado para la elección de carrera y convenios con universidades prestigiosas.
                    </Typography>
                  </Card>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        {/* Advanced Pillars Grid */}
        <Box sx={{ bgcolor: 'secondary.main', py: 15, color: 'white', position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'url(https://www.transparenttextures.com/patterns/cubes.png)' }} />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ maxWidth: 800, mb: 10 }} data-aos="fade-up">
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 3 }}>Pilares Formativos</Typography>
              <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
                Un ecosistema de aprendizaje diseñado para potenciar las habilidades del siglo XXI.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {[
                { 
                  title: 'Ciencias e Ingeniería', 
                  desc: 'Profundización en matemáticas avanzadas, física y química con laboratorios modernos para la experimentación real.',
                  icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />
                },
                { 
                  title: 'Tecnología Aplicada', 
                  desc: 'Dominio de herramientas digitales de gestión, programación y robótica avanzada en nuestra plataforma blended.',
                  icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />
                },
                { 
                  title: 'Liderazgo Global', 
                  desc: 'Debates, oratoria y proyectos de impacto social que preparan al alumno para influir positivamente en su entorno.',
                  icon: <PublicIcon sx={{ fontSize: 40 }} />
                },
                { 
                  title: 'Identidad y Valores', 
                  desc: 'Fortalecimiento de la fe y la ética a través de una cosmovisión cristiana aplicada a la vida cotidiana.',
                  icon: <SchoolIcon sx={{ fontSize: 40 }} />
                }
              ].map((card, idx) => (
                <Grid size={{ xs: 12, md: 6 }} key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                  <Box sx={{ 
                    p: 5, 
                    borderRadius: 6, 
                    bgcolor: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', transform: 'translateY(-10px)' }
                  }}>
                    <Box sx={{ color: 'primary.light', mb: 3 }}>{card.icon}</Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>{card.title}</Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>{card.desc}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Life at HS Section */}
        <Box sx={{ py: 15 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 10 }} data-aos="fade-up">
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800 }}>MÁS ALLÁ DE LAS AULAS</Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>Experiencia Formativa Integral</Typography>
            </Box>
            <Grid container spacing={4}>
              {[
                { label: 'Deporte de Élite', icon: <SportsScoreIcon/>, img: 'https://images.unsplash.com/photo-1543326162-4f30c6a858e3?auto=format&fit=crop&w=800&q=80' },
                { label: 'Taller de Innovación', icon: <PsychologyIcon/>, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
                { label: 'Misiones y Servicio', icon: <PublicIcon/>, img: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80' },
                { label: 'Exhibición de Talentos', icon: <AutoAwesomeIcon/>, img: 'https://images.unsplash.com/photo-1514525253344-99a42d74051c?auto=format&fit=crop&w=800&q=80' }
              ].map((item, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <Box sx={{ position: 'relative', borderRadius: 6, overflow: 'hidden', height: 450, cursor: 'pointer', '&:hover img': { transform: 'scale(1.1)' } }}>
                    <Box component="img" src={item.img} sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                    <Box sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      p: 4, 
                      pt: 10,
                      backgroundImage: 'linear-gradient(transparent, rgba(10, 31, 68, 0.95))', 
                      color: 'white',
                      textAlign: 'center'
                    }}>
                      <Box sx={{ color: 'primary.light', mb: 2 }}>{item.icon}</Box>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>{item.label}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Final CTA */}
        <Box sx={{ bgcolor: 'secondary.main', py: 15, textAlign: 'center', color: 'white' }}>
          <Container maxWidth="md" data-aos="zoom-in">
            <Typography variant="h2" sx={{ fontWeight: 900, mb: 4 }}>Tu Futuro Empieza Aquí</Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, mb: 6, maxWidth: 600, mx: 'auto' }}>
              Descubre cómo nuestra propuesta para secundaria transforma a los adolescentes en líderes íntegros y competitivos.
            </Typography>
            <Button 
                variant="contained" 
                size="large" 
                href="/admision"
                sx={{ bgcolor: 'primary.main', px: 8, py: 2.5, fontSize: '1.2rem', fontWeight: 800, borderRadius: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.3)', '&:hover': { bgcolor: 'primary.dark' } }}
              >
                Solicitar Información de Matrícula
              </Button>
          </Container>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default LevelSecundaria;
