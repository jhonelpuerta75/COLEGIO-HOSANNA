import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PublicIcon from '@mui/icons-material/Public';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LevelPrimaria: React.FC = () => {
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
            backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.7), rgba(10, 31, 68, 0.85)), url(https://images.unsplash.com/photo-1577891776192-c990263309a4?auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            clipPath: { md: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' },
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: 800 }} data-aos="fade-up">
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
                FORMACIÓN PARA LA VIDA
              </Typography>
              <Typography variant="h1" sx={{ mt: 1, mb: 4, fontSize: { xs: '3.5rem', md: '5.5rem' }, fontWeight: 900, lineHeight: 1 }}>
                Nivel Primaria: <br/> <Box component="span" sx={{ color: 'primary.light' }}>Excelencia que Trasciende</Box>
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.6, mb: 6, fontSize: { xs: '1.1rem', md: '1.4rem' } }}>
                Cimentando las bases del conocimiento y el carácter en un entorno de innovación pedagógica y valores cristianos inamovibles.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  href="#metodologia"
                  sx={{ bgcolor: 'white', color: 'secondary.main', px: 5, py: 2, fontWeight: 800, '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
                >
                  Descubrir Metodología
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  href="#admision"
                  sx={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', px: 5, py: 2, fontWeight: 800, '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  Proceso de Admisión
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Quick Stats Bar */}
        <Container maxWidth="lg" sx={{ mt: { md: -10 }, mb: 10, position: 'relative', zIndex: 2 }}>
          <Grid container spacing={0} sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
            {[
              { label: 'Formación', value: 'Integral', color: '#046bd2' },
              { label: 'Bilingüismo', value: 'Intensivo', color: '#0356a8' },
              { label: 'Tecnología', value: 'Blended', color: '#024281' },
              { label: 'Valores', value: 'Cristianos', color: '#012e5a' }
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

        {/* Core Benefits - Editorial Layout */}
        <Container maxWidth="lg" sx={{ py: 12 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
              <Box sx={{ position: 'relative' }}>
                <Box 
                  component="img" 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" 
                  sx={{ width: '100%', borderRadius: 8, boxShadow: '0 40px 80px rgba(0,0,0,0.15)', position: 'relative', zIndex: 2 }} 
                />
                <Box sx={{ position: 'absolute', top: -30, left: -30, width: 200, height: 200, bgcolor: 'primary.light', opacity: 0.1, borderRadius: '50%', zIndex: 1 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.15em' }}>
                    EXPERIENCIA EDUCATIVA
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, mt: 1, color: 'secondary.main' }}>
                    Donde el Conocimiento Encunetra su Propósito
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.2rem' }}>
                  En el Colegio Hosanna, entendemos que la educación primaria es la etapa más crucial para el desarrollo del pensamiento crítico y la formación del carácter. Nuestro enfoque bilingüe y metodologías activas preparan a los estudiantes para los retos globales del siglo XXI.
                </Typography>
                <Grid container spacing={3}>
                  {[
                    { title: 'Excelencia Académica', desc: 'Currículum avanzado con estándares internacionales.' },
                    { title: 'Innovación Digital', desc: 'Uso de plataformas interactivas y aprendizaje híbrido.' },
                    { title: 'Dones y Talentos', desc: 'Identificación y desarrollo de habilidades artísticas y deportivas.' }
                  ].map((item, i) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={i}>
                      <Box sx={{ p: 2, borderLeft: '3px solid', borderColor: 'primary.main', bgcolor: 'rgba(4,107,210,0.03)' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5 }}>{item.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        {/* Innovation Grid - Inspired by MethodologyPage */}
        <Box sx={{ bgcolor: 'secondary.main', py: 15, color: 'white' }}>
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: 800, mb: 10 }} data-aos="fade-up">
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 3 }}>Pilares de Innovación Pedagógica</Typography>
              <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
                Nuestra metodología "Blended Learning" combina lo mejor de la enseñanza tradicional con herramientas digitales de vanguardia.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {[
                { 
                  title: 'Aprendizaje Bilingüe', 
                  desc: 'Inmersión gradual en el idioma inglés con certificación internacional, enfocada en la fluidez comunicativa.',
                  icon: <PublicIcon sx={{ fontSize: 40 }} />
                },
                { 
                  title: 'Pensamiento Lógico', 
                  desc: 'Métodos modernos de enseñanza de matemáticas que fomentan la resolución creativa de problemas cotidianos.',
                  icon: <MenuBookIcon sx={{ fontSize: 40 }} />
                },
                { 
                  title: 'Ciencia y Tecnología', 
                  desc: 'Laboratorios de innovación donde los estudiantes exploran el mundo a través del método científico.',
                  icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />
                },
                { 
                  title: 'Artes y Oratoria', 
                  desc: 'Desarrollo de la expresión pública y apreciación estética para formar líderes con voz propia.',
                  icon: <MusicNoteIcon sx={{ fontSize: 40 }} />
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

        {/* Foundation Section - Spiritual focused */}
        <Box sx={{ py: 15, position: 'relative' }}>
          <Container maxWidth="lg">
            <Card sx={{ 
              borderRadius: 8, 
              overflow: 'hidden', 
              boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
              border: 'none',
              bgcolor: 'white'
            }}>
              <Grid container>
                <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 5, md: 10 } }}>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2 }}>VALORES CRISTIANOS</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, mb: 4, lineHeight: 1.1 }}>Educando con Base en la Roca</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2, fontSize: '1.2rem', mb: 4 }}>
                    "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él" - Proverbios 22:6. Nuestra educación no solo informa la mente, transforma el corazón. Cada mañana iniciamos con un tiempo de oración y reflexión bíblica, integrando los principios morales de Dios en cada lección diaria.
                  </Typography>
                  <Button variant="text" sx={{ fontWeight: 800, px: 0, '&:hover': { bgcolor: 'transparent', color: 'primary.dark' } }}>
                    Ver más sobre nuestra filosofía →
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box 
                    component="img" 
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80" 
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </Grid>
              </Grid>
            </Card>
          </Container>
        </Box>

        {/* Extended Curriculum Section */}
        <Container maxWidth="lg" sx={{ py: 12 }}>
          <Box sx={{ textAlign: 'center', mb: 12 }} data-aos="fade-up">
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800 }}>EXTENSIÓN ACADÉMICA</Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>Programa de Desarrollo Creativo</Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { label: 'Deportes de Competencia', icon: <SportsBasketballIcon/>, img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80' },
              { label: 'Ensamble Musical', icon: <MusicNoteIcon/>, img: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&w=800&q=80' },
              { label: 'Laboratorio de Robótica', icon: <AutoAwesomeIcon/>, img: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80' },
              { label: 'Artes Escénicas', icon: <MusicNoteIcon/>, img: 'https://images.unsplash.com/photo-1491333078588-55b6733c7de6?auto=format&fit=crop&w=800&q=80' }
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

        {/* Final CTA - Premium Background */}
        <Box sx={{ bgcolor: 'secondary.main', py: 15, position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
          <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Box data-aos="zoom-in">
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 4, color: 'white' }}>Inicie el camino hacia la excelencia hoy</Typography>
              <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', mb: 8, maxWidth: 600, mx: 'auto' }}>
                Asegure una formación de calidad para su hijo en un entorno de aprendizaje seguro e innovador.
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                href="/#contacto"
                sx={{ bgcolor: 'primary.main', px: 8, py: 2.5, fontSize: '1.2rem', fontWeight: 800, borderRadius: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              >
                Solicitar una Visita
              </Button>
            </Box>
          </Container>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default LevelPrimaria;
