import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'white',
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.8), rgba(10, 31, 68, 0.8)), url(/hs-photos/fondo2-nivelado.jpeg)',
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
            Desde 1992
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
                src="/hs-photos/fondo2-nivelado.jpeg"
                alt="Tres décadas de compromiso educativo - Colegio Hosanna"
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
                  right: { xs: 0, sm: -20 },
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
                Fundado en 1992, el Colegio Hosanna nació con la visión de proporcionar una educación que no solo alimentara el intelecto, sino también el espíritu. A lo largo de estos años, hemos visto a cientos de estudiantes graduarse con las herramientas necesarias para triunfar en la vida universitaria y profesional.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nuestra evolución ha sido constante, integrando nuevas tecnologías y metodologías pedagógicas, pero manteniendo siempre intactos nuestros valores fundacionales de honradez, solidaridad y nobleza.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Misión y Visión Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={5} alignItems="stretch">
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-right"
          >
            <Card sx={{ height: '100%', p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: '0 !important', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '8px',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <VisibilityIcon sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Typography variant="h5">Visión</Typography>
                </Stack>
                <Divider sx={{ mb: 2.5 }} />
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 3 }}>
                  “Somos hechura de Dios, creados en Cristo Jesús para buenas obras”. (Efesios 2:10)
                  <br /><br />
                  Nuestro colegio hosanna, se formó hace 30 años con la visión de proporcionar una educación centrada en cristo, con la excelencia e innovación educativa, y formación integral para a gloria de Dios.
                </Typography>

                <Box
                  sx={{
                    mt: 'auto',
                    pt: 2.5,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: 200,
                      py: 3.5,
                      px: 2,
                      borderRadius: 3,
                      background: 'linear-gradient(180deg, rgba(4, 107, 210, 0.05) 0%, rgba(10, 31, 68, 0.02) 100%)',
                      border: '1px solid',
                      borderColor: 'rgba(4, 107, 210, 0.12)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.light',
                        boxShadow: '0 8px 24px rgba(4, 107, 210, 0.08)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/logo-hosanna.png"
                      alt="Insignia Colegio Hosanna"
                      sx={{
                        maxHeight: { xs: 130, sm: 150, md: 175 },
                        maxWidth: '85%',
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 22px rgba(4, 107, 210, 0.22))',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 2,
                        fontWeight: 700,
                        color: 'primary.main',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontSize: '0.72rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        bgcolor: 'rgba(4, 107, 210, 0.08)',
                        px: 2,
                        py: 0.5,
                        borderRadius: 10,
                      }}
                    >
                      Pucallpa, Perú • Desde 1992
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-left"
          >
            <Card sx={{ height: '100%', p: { xs: 3, md: 4 } }}>
              <CardContent sx={{ p: '0 !important' }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '8px',
                      bgcolor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FlagIcon sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Typography variant="h5">Misión</Typography>
                </Stack>
                <Divider sx={{ mb: 2.5 }} />
                <Stack spacing={2}>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, textAlign: 'justify' }}>
                    Colegio Hosanna se estableció para crear la próxima generación en la que una cosmovisión cristiana basada en Las Escrituras esté completamente presente. Frente al llamado de Dios, el colegio ayuda a los padres que quieren criar a sus hijos en base a la Palabra de Dios, reconociendo que creó Dios al hombre a su imagen y semejanza.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, textAlign: 'justify' }}>
                    El Plan de educación brindado en nuestro colegio se establece sobre la base de la verdad de que La Verdad es «Jesucristo» (Juan 14: 6 “Yo soy el camino, la verdad y la vida”), y se enseña a recrear (restaurar) y desarrollar una verdadera comprensión de Dios y los seres humanos, y el mundo, y su relación entre ellos.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, textAlign: 'justify' }}>
                    A través del estudio a cada tema, nuestros estudiantes comprenderán la voluntad y el camino de Dios para todas las áreas de la vida humana y serán formado con una mente y corazón que responda de una manera bíblica, teniendo una conciencia de los problemas del mundo y un anhelo por la verdad.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, textAlign: 'justify' }}>
                    Adoptando estrategias de aprendizaje efectivas y diversas que les permitan pensar de manera exploratoria, crítica y creativa en sus campos intelectuales, los estudiantes de Colegio Hosanna tendrán la oportunidad de equiparlos con las habilidades y la capacidad de responder como la obra maestra de Dios en el mundo como aquellos creados para el bien.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

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
            { level: 'Nivel Inicial', resolution: 'R.D. Nº 0069', date: '26 de enero de 1992', icon: <SchoolIcon /> },
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


      <Footer />
    </Box>
  );
}
