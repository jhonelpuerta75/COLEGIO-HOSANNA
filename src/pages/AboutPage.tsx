import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import verifiedIcon from '@mui/icons-material/Verified';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
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
          backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.8), rgba(10, 31, 68, 0.8)), url(/hero-school.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center'
        }}
      >
        <Container
          maxWidth="md"
          data-aos="fade-up"
        >
          <Typography variant="overline" sx={{ letterSpacing: '0.2em', fontWeight: 700, opacity: 0.8 }}>
            Desde 1993
          </Typography>
          <Typography variant="h1" sx={{ mt: 2, mb: 3, fontSize: { xs: '3rem', md: '4.5rem' } }}>
            Nuestra Institución
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.6 }}>
            Formando líderes con propósito, excelencia académica y una sólida base cristiana para enfrentar los retos del futuro.
          </Typography>
        </Container>
      </Box>

      {/* Historia Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-right"
          >
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src="/hero-school.webp"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 3,
                  borderRadius: 2,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 800 }}>30+</Typography>
                <Typography variant="body2">Años de Excelencia</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-left"
          >
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <HistoryEduIcon color="primary" />
                <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main' }}>Nuestra Historia</Typography>
              </Box>
              <Typography variant="h2">Tres décadas de compromiso educativo</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Fundado en 1993, el Colegio Hosanna nació con la visión de proporcionar una educación que no solo alimentara el intelecto, sino también el espíritu. A lo largo de estos años, hemos visto a cientos de estudiantes graduarse con las herramientas necesarias para triunfar en la vida universitaria y profesional.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nuestra evolución ha sido constante, integrando nuevas tecnologías y metodologías pedagógicas, pero manteniendo siempre intactos nuestros valores fundacionales de honradez, solidaridad y nobleza.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Misión y Visión Section */}
      <Box sx={{ bgcolor: 'rgba(4,107,210,0.03)', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid
              size={{ xs: 12, md: 6 }}
              data-aos="zoom-in"
            >
              <Card sx={{ p: 4, height: '100%', border: 'none', boxShadow: '0 10px 30px rgba(4,107,210,0.05)' }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 1.5, borderRadius: 2 }}>
                      <FlagIcon />
                    </Box>
                    <Typography variant="h4">Misión</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Brindar una formación integral que combina excelencia académica, innovación y pensamiento crítico, equipando a cada estudiante para desarrollar su máximo potencial como obra maestra de Dios.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Card sx={{ p: 4, height: '100%', border: 'none', boxShadow: '0 10px 30px rgba(4,107,210,0.05)' }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 1.5, borderRadius: 2 }}>
                      <VisibilityIcon />
                    </Box>
                    <Typography variant="h4">Visión</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Ser un referente de excelencia educativa cristiana, formando líderes íntegros que transformen la sociedad, guiados por principios bíblicos y una cosmovisión orientada al propósito de Dios.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Reconocimiento Oficial Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }} data-aos="fade-up">
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em' }}>
            Legalidad e Institucionalidad
          </Typography>
          <Typography variant="h2" sx={{ mt: 1 }}>Reconocimiento Oficial</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2, maxWidth: 700, mx: 'auto' }}>
            Nuestra institución cuenta con todas las autorizaciones del Ministerio de Educación del Perú, garantizando una formación certificada en cada uno de nuestros niveles.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {[
            { level: 'Nivel Inicial', resolution: 'R.D. Nº 0069', date: '26 de enero de 1993', icon: <SchoolIcon /> },
            { level: 'Nivel Primaria', resolution: 'R.D. Nº 1325', date: '12 de diciembre de 1994', icon: <SchoolIcon /> },
            { level: 'Nivel Secundaria', resolution: 'R.D. Nº 0017', date: '18 de enero de 1999', icon: <SchoolIcon /> }
          ].map((item, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <Card sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 2.5,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: '0 4px 20px rgba(4,107,210,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}>
                <Box sx={{
                  bgcolor: 'rgba(4,107,210,0.08)',
                  color: 'primary.main',
                  p: 2,
                  borderRadius: '50%',
                  display: 'flex'
                }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>
                    {item.level}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 800, mb: 0.2 }}>
                    {item.resolution}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 600 }}>
                    Autorizado el {item.date}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Box data-aos="fade-up">
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>Nuestra Comunidad</Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 6 }}>Un equipo comprometido</Typography>
        </Box>

        <Grid container spacing={4}>
          {[
            { role: 'Dirección Académica', icon: <SchoolIcon sx={{ fontSize: 40 }} /> },
            { role: 'Plana Docente', icon: <GroupsIcon sx={{ fontSize: 40 }} /> },
            { role: 'Departamento Psicopedagógico', icon: <GroupsIcon sx={{ fontSize: 40 }} /> }
          ].map((item, idx) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <Box sx={{ textAlign: 'center', p: 4 }}>
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    bgcolor: 'rgba(10, 31, 68, 0.05)',
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'secondary.main'
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 1 }}>{item.role}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Profesionales altamente calificados y con vocación cristiana.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* Final CTA */}
      <Box
        data-aos="zoom-in"
        sx={{ bgcolor: 'secondary.main', color: 'white', py: 10, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 4 }}>¿Quieres formar parte de nuestra familia?</Typography>
          <Button
            variant="contained"
            size="large"
            href="#admision"
            sx={{
              bgcolor: 'primary.main',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            Iniciar proceso de Admisión
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
