import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HubIcon from '@mui/icons-material/Hub';
import AppsIcon from '@mui/icons-material/Apps';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import HistoryIcon from '@mui/icons-material/History';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ChatIcon from '@mui/icons-material/Chat';
import TranslateIcon from '@mui/icons-material/Translate';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PaletteIcon from '@mui/icons-material/Palette';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Groups3Icon from '@mui/icons-material/Groups3';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function MethodologyPage() {
  const areas = [
    {
      title: 'Inglés',
      subtitle: 'Authorized Test Center',
      description: 'Certificación internacional TOEFL ITP. Los alumnos desarrollan fluidez y dominio del idioma con estándares globales.',
      icon: <TranslateIcon sx={{ fontSize: 32 }} />,
      color: '#046bd2',
      image: 'https://images.unsplash.com/photo-1543165796-5426273ea4d1?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Ciencia y Tecnología',
      subtitle: 'Innovación y Descubrimiento',
      description: 'Fomentamos la curiosidad científica y el uso responsable de la tecnología para resolver problemas del entorno.',
      icon: <ScienceIcon sx={{ fontSize: 32 }} />,
      color: '#f57c00',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Matemática',
      subtitle: 'Pensamiento Lógico',
      description: 'Desarrollo del razonamiento abstracto y habilidades analíticas para la toma de decisiones informadas.',
      icon: <CalculateIcon sx={{ fontSize: 32 }} />,
      color: '#00bcd4',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd48a5791?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Educación Física',
      subtitle: 'Salud y Movimiento',
      description: 'Promovemos el bienestar físico, la disciplina y el trabajo en equipo a través del deporte competitivo y recreativo.',
      icon: <DirectionsRunIcon sx={{ fontSize: 32 }} />,
      color: '#8bc34a',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Ciencias Sociales',
      subtitle: 'Conciencia Ciudadana',
      description: 'Análisis de la realidad histórica y social para formar ciudadanos responsables y comprometidos con el país.',
      icon: <HistoryIcon sx={{ fontSize: 32 }} />,
      color: '#fbc02d',
      image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Comunicación',
      subtitle: 'Expresión Literaria',
      description: 'Fortalecemos las habilidades comunicativas, la comprensión lectora y la expresión creativa de ideas.',
      icon: <ChatIcon sx={{ fontSize: 32 }} />,
      color: '#e91e63',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const platforms = [
    {
      name: 'SiaNet',
      description: 'Sistema de Información Académica Web para el seguimiento detallado del progreso del estudiante.',
      link: 'https://www.sianet.pe/HosannaPucallpa/loginpd.aspx'
    },
    {
      name: 'e-Stela',
      description: 'Plataforma de gestión del aprendizaje de Compartir, acceso a todos tus contenidos y servicios.',
      link: 'https://www.santillanaconnect.com/Account/Login/'
    },
    {
      name: 'Google Suite para la Educación',
      description: 'Herramientas diseñadas para empoderar a educadores y alumnos mientras innovan y aprenden juntos.',
      link: 'https://classroom.google.com/'
    },
    {
      name: 'Khan Academy',
      description: 'Plataforma web para aprender matemáticas, cálculo y ciencias con ejercicios prácticos y evaluaciones.',
      link: 'https://es.khanacademy.org/'
    }
  ];

  const blendedMethods = [
    'Havruta Learning', 'Flipped Classroom', 'Aprendizaje Basado en Proyectos', 
    'Aprendizaje Cooperativo', 'Gamificación', 'Aprendizaje Basado en Problemas', 
    'Design Thinking', 'Thinking-Based Learning', 'Aprendizaje Basado en Competencias'
  ];

  const cdlCategories = [
    {
      name: 'Música y Alabanza',
      icon: <MusicNoteIcon sx={{ fontSize: 28 }} />,
      color: '#e91e63',
      description: 'Expresión espiritual y técnica a través de diversos instrumentos.',
      items: ['Ensamble de cuerdas', 'Piano', 'Batería', 'Coro', 'Grupo de Alabanza', 'Equipo de Música']
    },
    {
      name: 'Artes y Cultura',
      icon: <PaletteIcon sx={{ fontSize: 28 }} />,
      color: '#f57c00',
      description: 'Potenciamos la creatividad y la sensibilidad artística de cada alumno.',
      items: ['Danza', 'Dibujo y Pintura', 'Teatro', 'Gastronomía', 'Viaje de estudio']
    },
    {
      name: 'Deportes y Salud',
      icon: <SportsBasketballIcon sx={{ fontSize: 28 }} />,
      color: '#8bc34a',
      description: 'Fomentamos la disciplina y el trabajo en equipo mediante la actividad física.',
      items: ['Natación', 'Basquetbol', 'Futsal']
    },
    {
      name: 'Pensamiento y Ciencia',
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 28 }} />,
      color: '#00bcd4',
      description: 'Desarrollo de habilidades lógicas, tecnológicas y comunicativas.',
      items: ['Experimento Científico', 'Dronótica', 'Ajedrez', 'Plan Lector', 'Toelf - ITP']
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'secondary.main', 
          color: 'white', 
          pt: { xs: 15, md: 20 }, 
          pb: { xs: 10, md: 15 },
          backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.85), rgba(10, 31, 68, 0.85)), url(https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md" data-aos="fade-up">
          <Typography variant="overline" sx={{ letterSpacing: '0.2em', fontWeight: 700, opacity: 0.8 }}>
            Propuesta Educativa
          </Typography>
          <Typography variant="h1" sx={{ mt: 2, mb: 3, fontSize: { xs: '3rem', md: '4.5rem' } }}>
            Nuestra Metodología
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.6, maxWidth: 800, mx: 'auto' }}>
            Un enfoque moderno e integral que combina excelencia académica, tecnología de vanguardia y valores cristianos.
          </Typography>
        </Container>
      </Box>

      {/* Quick Stats Bar */}
      <Box sx={{ bgcolor: 'white', position: 'relative', zIndex: 2, mt: -5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ boxShadow: '0 15px 45px rgba(0,0,0,0.1)', borderRadius: 4, overflow: 'hidden' }}>
            {[
              { label: 'Educación Híbrida', value: '100%', icon: <DevicesIcon />, color: '#046bd2' },
              { label: 'Talleres Extracurriculares', value: '+20', icon: <AutoAwesomeIcon />, color: '#e91e63' },
              { label: 'Excelencia Académica', value: 'TOP', icon: <WorkspacePremiumIcon />, color: '#fbc02d' },
              { label: 'Formación Integral', value: '100%', icon: <PsychologyIcon />, color: '#8bc34a' }
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, md: 3 }} key={idx}>
                <Box sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  bgcolor: 'white', 
                  borderRight: idx < 3 ? { md: '1px solid #eee' } : 'none',
                  borderBottom: { xs: idx < 2 ? '1px solid #eee' : 'none', md: 'none' }
                }}>
                  <Box sx={{ color: stat.color, mb: 1.5, display: 'flex', justifyContent: 'center' }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main' }}>{stat.value}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programa Pedagógico */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <SchoolIcon color="primary" />
                <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main' }}>Programa Pedagógico</Typography>
              </Box>
              <Typography variant="h2">Formación Integral y Excelencia</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nuestro Colegio Privado Hosanna tiene una propuesta educativa moderna que atiende los tres niveles: <strong>Inicial, Primaria y Secundaria</strong>. Nuestra razón de ser es la FORMACIÓN INTEGRAL de los estudiantes, para que sepan discernir con criterio y madurez los pilares del futuro del país.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Planteamos <strong>aprendizajes significativos</strong> que son útiles para la vida, fomentando la capacidad de liderazgo y la educación formativa en valores a través de proyectos especializados por áreas.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
            <Box 
              sx={{ 
                p: { xs: 4, md: 8 },
                borderRadius: 4, 
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                height: '100%',
                minHeight: 300
              }} 
            >
              <Box 
                component="img" 
                src="/logo-hosanna.png" 
                sx={{ 
                  width: '100%', 
                  maxWidth: 280,
                  height: 'auto',
                  filter: 'drop-shadow(0 10px 15px rgba(10, 31, 68, 0.1))'
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Blended Learning */}
      <Box sx={{ 
        bgcolor: 'secondary.main', 
        color: 'white', 
        py: { xs: 8, md: 12 },
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(4,107,210,0.15) 0%, transparent 40%)'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <LaptopMacIcon sx={{ color: 'primary.light' }} />
                  <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.light' }}>Educación Híbrida</Typography>
                </Box>
                <Typography variant="h2" sx={{ color: 'white' }}>Blended Learning</Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
                  Integramos foros, videoconferencias, recursos multimedia y entornos virtuales de aprendizaje gestionados por expertos para potenciar cada área del conocimiento.
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Typography variant="h6" sx={{ color: 'primary.light', mb: 2 }}>Innovación a través de:</Typography>
                  <Grid container spacing={2}>
                    {[
                      { name: 'Flipped Classroom', icon: <LightbulbIcon sx={{ fontSize: 18 }} /> },
                      { name: 'Design Thinking', icon: <PsychologyIcon sx={{ fontSize: 18 }} /> },
                      { name: 'Gamificación', icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
                      { name: 'Aprendizaje Basado en Proyectos', icon: <Groups3Icon sx={{ fontSize: 18 }} /> }
                    ].map((item) => (
                      <Grid size={{ xs: 6 }} key={item.name}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Box sx={{ color: 'primary.light', display: 'flex' }}>{item.icon}</Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>{item.name}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
              <Grid container spacing={2}>
                {[
                  { title: 'Havruta Learning', desc: 'Debate y análisis entre pares para profundizar conceptos.' },
                  { title: 'Thinking-Based Learning', desc: 'Desarrollo del pensamiento crítico y creativo por encima de la memoria.' },
                  { title: 'Aprendizaje Cooperativo', desc: 'Gestión de metas comunes para fortalecer habilidades sociales.' },
                  { title: 'Competencias Siglo XXI', desc: 'Preparación para un mundo laboral y social altamente tecnológico.' }
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box sx={{ 
                      p: 3, 
                      height: '100%', 
                      bgcolor: 'rgba(255,255,255,0.03)', 
                      borderRadius: 3, 
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.07)', transform: 'translateY(-4px)' }
                    }}>
                      <Typography variant="h6" sx={{ color: 'primary.light', mb: 1, fontWeight: 700 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.6 }}>{item.desc}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Proyectos por Áreas */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1 }}>
            <HubIcon color="primary" />
            <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main' }}>Metodología Activa</Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 2 }}>Proyectos por Áreas</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
            Nuestra propuesta se despliega en áreas clave, integrando conocimientos teóricos con aplicaciones prácticas y proyectos innovadores que preparan a nuestros alumnos para el éxito.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {areas.map((area, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                border: 'none', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                }
              }}>
                <Box sx={{ 
                  height: 140, 
                  position: 'relative',
                  backgroundImage: `url(${area.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  <Box sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    bgcolor: `${area.color}ee`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(2px)'
                  }}>
                    <Box sx={{ color: 'white', textAlign: 'center' }}>
                      {area.icon}
                    </Box>
                  </Box>
                </Box>
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, color: area.color }}>
                    {area.title}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.disabled', display: 'block', mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {area.subtitle}
                  </Typography>
                  <Divider sx={{ mb: 2, opacity: 0.5 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {area.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, mb: 6 }} data-aos="fade-up">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <AutoAwesomeIcon color="primary" />
            <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main' }}>Extensión Extracurricular</Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 3 }}>Creative Development Learning (CDL)</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 850, lineHeight: 1.8 }}>
            El programa CDL apoya a todos los estudiantes a descubrir y desarrollar sus dones y habilidades. 
            Como portadores de la imagen de Dios, participan activamente en diversos campos para identificar y potenciar los diversos dones creativos que Dios les ha dado.
          </Typography>
          <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(4,107,210,0.05)', borderRadius: 2, borderLeft: '4px solid', borderColor: 'primary.main', display: 'inline-block' }}>
            <Typography variant="body2" sx={{ fontWeight: 700, fontStyle: 'italic', color: 'primary.dark' }}>
              ".. y lo he llenado del Espíritu de Dios, en sabiduría y en inteligencia, en ciencia y en todo arte.." — Éxodo 31:3
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {cdlCategories.map((cat, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={cat.name} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card sx={{ 
                height: '100%', 
                border: 'none', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  bgcolor: cat.color
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: '12px', 
                      bgcolor: `${cat.color}15`, 
                      color: cat.color,
                      display: 'flex'
                    }}>
                      {cat.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>{cat.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 600 }}>{cat.description}</Typography>
                    </Box>
                  </Stack>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {cat.items.map(item => (
                      <Box 
                        key={item}
                        sx={{ 
                          px: 2, 
                          py: 0.75, 
                          borderRadius: '50px', 
                          bgcolor: 'white', 
                          border: '1px solid', 
                          borderColor: 'divider',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: 'text.secondary',
                          transition: 'all 0.2s',
                          '&:hover': {
                            borderColor: cat.color,
                            color: cat.color,
                            bgcolor: `${cat.color}05`,
                            boxShadow: `0 4px 12px ${cat.color}15`
                          }
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Plataformas Section */}
      <Box sx={{ bgcolor: 'rgba(4,107,210,0.03)', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1 }}>
              <AppsIcon color="primary" />
              <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main' }}>Ecosistema Digital</Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2 }}>Plataformas Educativas</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Integramos las mejores herramientas digitales para potenciar el aprendizaje de nuestros alumnos.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {platforms.map((platform, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
                  <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 800 }}>
                    {platform.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}>
                    {platform.description}
                  </Typography>
                  <Button 
                    component="a" 
                    href={platform.link} 
                    target="_blank"
                    variant="outlined" 
                    size="small"
                    fullWidth
                  >
                    Acceder
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box 
        data-aos="zoom-in"
        sx={{ bgcolor: 'secondary.main', color: 'white', py: 10, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 4 }}>Conoce más sobre nuestra metodología</Typography>
          <Button 
            variant="contained" 
            size="large" 
            href="#contacto"
            sx={{ 
              bgcolor: 'primary.main', 
              px: 6, 
              py: 2, 
              fontSize: '1.1rem',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            Solicitar Información
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
