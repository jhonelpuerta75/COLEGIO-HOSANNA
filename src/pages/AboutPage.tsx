import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icono: Manos orando (Formación Espiritual) - Flaticon
const PrayingHandsIcon = () => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* Destellos de luz como en el flyer */}
    <svg
      width="100"
      height="90"
      viewBox="0 0 100 90"
      fill="none"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
      style={{ position: 'absolute', pointerEvents: 'none' }}
    >
      <line x1="16" y1="32" x2="6" y2="29" />
      <line x1="22" y1="18" x2="14" y2="10" />
      <line x1="78" y1="18" x2="86" y2="10" />
      <line x1="84" y1="32" x2="94" y2="29" />
    </svg>
    <Box
      component="img"
      src="/icons/oracion.png"
      alt="Formación Espiritual"
      sx={{
        width: 72,
        height: 72,
        objectFit: 'contain',
        filter: 'brightness(0) invert(1)',
        display: 'block',
      }}
    />
  </Box>
);

// Icono: Estudiante graduado con birrete (Excelencia Académica) - Flaticon
const GraduateIcon = () => (
  <Box
    component="img"
    src="/icons/estudiante.png"
    alt="Excelencia Académica"
    sx={{
      width: 76,
      height: 76,
      objectFit: 'contain',
      filter: 'brightness(0) invert(1)',
      display: 'block',
    }}
  />
);

// Icono: Estudiante leyendo un libro abierto (Formación Integral) - Flaticon
const ReadingBookIcon = () => (
  <Box
    component="img"
    src="/icons/libro.png"
    alt="Formación Integral"
    sx={{
      width: 76,
      height: 76,
      objectFit: 'contain',
      filter: 'brightness(0) invert(1)',
      display: 'block',
    }}
  />
);

// Píldora inferior de insignia dentro de las tarjetas
const HosannaCardPill = () => (
  <Box
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0.8,
      bgcolor: 'white',
      py: 0.5,
      px: 1.5,
      borderRadius: '50px',
      boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
    }}
  >
    <Box
      component="img"
      src="/logo-hosanna.png"
      alt="Logo Hosanna"
      sx={{ width: 16, height: 20, objectFit: 'contain' }}
    />
    <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
      <Typography
        sx={{
          fontSize: '0.48rem',
          fontWeight: 800,
          color: '#64748b',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        Colegio Privado
      </Typography>
      <Typography
        sx={{
          fontSize: '0.72rem',
          fontWeight: 900,
          color: '#0a1f44',
          letterSpacing: '0.06em',
        }}
      >
        HOSANNA
      </Typography>
    </Box>
  </Box>
);

// Comillas // bicolores como en el flyer original
const QuoteSlashesTop = () => (
  <Box component="span" sx={{ display: 'inline-flex', mr: 0.8, verticalAlign: 'middle', userSelect: 'none' }}>
    <Box component="span" sx={{ color: '#f43f5e', fontWeight: 900, fontSize: '1.35rem', lineHeight: 1 }}>/</Box>
    <Box component="span" sx={{ color: '#84cc16', fontWeight: 900, fontSize: '1.35rem', lineHeight: 1 }}>/</Box>
  </Box>
);

const QuoteSlashesBottom = () => (
  <Box component="span" sx={{ display: 'inline-flex', ml: 0.8, verticalAlign: 'middle', userSelect: 'none' }}>
    <Box component="span" sx={{ color: '#0ea5e9', fontWeight: 900, fontSize: '1.35rem', lineHeight: 1 }}>/</Box>
    <Box component="span" sx={{ color: '#eab308', fontWeight: 900, fontSize: '1.35rem', lineHeight: 1 }}>/</Box>
  </Box>
);

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

      {/* ======================================================== */}
      {/* Sección: Nuestros Valores Principales & Pilares Formativos */}
      {/* ======================================================== */}
      <Box
        sx={{
          background: 'linear-gradient(180deg, #fff5f2 0%, #fffbfb 35%, #ffffff 100%)',
          py: { xs: 7, md: 10 },
          borderTop: '1px solid',
          borderColor: 'rgba(4, 107, 210, 0.08)',
        }}
      >
        <Container maxWidth="lg">
          {/* Título superior: NUESTROS VALORES PRINCIPALES */}
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 900,
              color: '#0284c7',
              fontSize: { xs: '1.25rem', sm: '1.45rem', md: '1.6rem' },
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              mb: { xs: 5, md: 7 },
            }}
            data-aos="fade-down"
          >
            NUESTROS VALORES PRINCIPALES
          </Typography>

          {/* Fila superior: 3 Insignias de Valores a la izquierda y Foto grupal a la derecha */}
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* 3 Insignias de Valores */}
            <Grid size={{ xs: 12, md: 5.5 }} data-aos="fade-right">
              <Stack spacing={3.5} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
                {/* 1. HONRADEZ */}
                <Box sx={{ position: 'relative', width: '100%', maxWidth: { xs: 300, sm: 340 } }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      transform: 'translate(6px, 6px) rotate(-3deg)',
                      bgcolor: 'rgba(245, 158, 11, 0.12)',
                      borderRadius: '8px',
                      border: '1.5px dashed #f59e0b',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'relative',
                      bgcolor: 'white',
                      border: '2.8px solid #f59e0b',
                      borderRadius: '8px',
                      py: 1.5,
                      px: 3,
                      transform: 'rotate(-3deg)',
                      boxShadow: '0 6px 18px rgba(245, 158, 11, 0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src="/logo-hosanna.png"
                      alt="Hosanna"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        right: 30,
                        width: 22,
                        height: 26,
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: '#d97706',
                        letterSpacing: '0.08em',
                        fontSize: { xs: '1.35rem', sm: '1.65rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      HONRADEZ
                    </Typography>
                  </Box>
                </Box>

                {/* 2. SOLIDARIDAD */}
                <Box sx={{ position: 'relative', width: '100%', maxWidth: { xs: 300, sm: 340 }, ml: { sm: 3, md: 4 } }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      transform: 'translate(6px, 6px) rotate(2deg)',
                      bgcolor: 'rgba(16, 185, 129, 0.12)',
                      borderRadius: '8px',
                      border: '1.5px dashed #10b981',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'relative',
                      bgcolor: 'white',
                      border: '2.8px solid #10b981',
                      borderRadius: '8px',
                      py: 1.5,
                      px: 3,
                      transform: 'rotate(2deg)',
                      boxShadow: '0 6px 18px rgba(16, 185, 129, 0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src="/logo-hosanna.png"
                      alt="Hosanna"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: 24,
                        width: 22,
                        height: 26,
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: '#15803d',
                        letterSpacing: '0.08em',
                        fontSize: { xs: '1.35rem', sm: '1.65rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      SOLIDARIDAD
                    </Typography>
                  </Box>
                </Box>

                {/* 3. NOBLEZA */}
                <Box sx={{ position: 'relative', width: '100%', maxWidth: { xs: 270, sm: 300 }, ml: { sm: 1.5, md: 2 } }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      transform: 'translate(6px, 6px) rotate(-2deg)',
                      bgcolor: 'rgba(2, 132, 199, 0.12)',
                      borderRadius: '8px',
                      border: '1.5px dashed #0284c7',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'relative',
                      bgcolor: 'white',
                      border: '2.8px solid #0284c7',
                      borderRadius: '8px',
                      py: 1.5,
                      px: 3,
                      transform: 'rotate(-2deg)',
                      boxShadow: '0 6px 18px rgba(2, 132, 199, 0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src="/logo-hosanna.png"
                      alt="Hosanna"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: 20,
                        width: 22,
                        height: 26,
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: '#0284c7',
                        letterSpacing: '0.08em',
                        fontSize: { xs: '1.35rem', sm: '1.65rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      NOBLEZA
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>

            {/* Foto de la Comunidad en el Campo Deportivo con cintas decorativas */}
            <Grid size={{ xs: 12, md: 6.5 }} data-aos="fade-left">
              <Box sx={{ position: 'relative', px: { xs: 1, sm: 2 } }}>
                {/* Cintas decorativas en esquina superior izquierda */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    left: 0,
                    zIndex: 0,
                    display: 'flex',
                    gap: 0.8,
                    transform: 'rotate(-20deg)',
                  }}
                >
                  <Box sx={{ width: 14, height: 60, borderRadius: 1.5, bgcolor: '#f97316' }} />
                  <Box sx={{ width: 14, height: 75, borderRadius: 1.5, bgcolor: '#f59e0b' }} />
                </Box>

                {/* Cintas decorativas en esquina inferior derecha */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -16,
                    right: 0,
                    zIndex: 0,
                    display: 'flex',
                    gap: 0.8,
                    transform: 'rotate(-20deg)',
                  }}
                >
                  <Box sx={{ width: 14, height: 75, borderRadius: 1.5, bgcolor: '#10b981' }} />
                  <Box sx={{ width: 14, height: 60, borderRadius: 1.5, bgcolor: '#f59e0b' }} />
                  <Box sx={{ width: 14, height: 45, borderRadius: 1.5, bgcolor: '#06b6d4' }} />
                </Box>

                {/* Marco de foto principal */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 16px 36px rgba(10, 31, 68, 0.16)',
                    border: '4px solid #ffffff',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Box
                    component="img"
                    src="/hs-photos/fondo2-nivelado.jpeg"
                    alt="Estudiantes en el campo - Colegio Hosanna"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Fila inferior: 3 Columnas con Tarjeta de Color, Título y Texto Bíblico/Formativo */}
          <Grid container spacing={{ xs: 5, md: 4 }} sx={{ mt: { xs: 8, md: 11 }, justifyContent: 'center' }}>
            {/* Columna 1: Formación Espiritual */}
            <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up" data-aos-delay="0">
              <Box sx={{ textAlign: 'center' }}>
                {/* Tarjeta Azul */}
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 240,
                    height: 270,
                    mx: 'auto',
                    borderRadius: '24px',
                    bgcolor: '#0284c7',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pt: 4,
                    pb: 2.2,
                    px: 2,
                    boxShadow: '0 12px 28px rgba(2, 132, 199, 0.28)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 18px 36px rgba(2, 132, 199, 0.38)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                    <PrayingHandsIcon />
                  </Box>
                  <HosannaCardPill />
                </Box>

                {/* Título inferior */}
                <Typography
                  sx={{
                    mt: 2.8,
                    mb: 1.5,
                    fontWeight: 900,
                    fontSize: '1.05rem',
                    color: '#0f172a',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  FORMACIÓN ESPIRITUAL
                </Typography>

                {/* Texto exacto */}
                <Box sx={{ color: '#1e293b', fontSize: '0.98rem', lineHeight: 1.6, maxWidth: 280, mx: 'auto' }}>
                  <QuoteSlashesTop />
                  El <strong>Entendimiento Bíblico</strong>
                  <br />
                  hacia el éxito en la vida.
                  <br />
                  (2 Timoteo 3:16-17).
                  <QuoteSlashesBottom />
                </Box>
              </Box>
            </Grid>

            {/* Columna 2: Excelencia Académica */}
            <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up" data-aos-delay="100">
              <Box sx={{ textAlign: 'center' }}>
                {/* Tarjeta Verde */}
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 240,
                    height: 270,
                    mx: 'auto',
                    borderRadius: '24px',
                    bgcolor: '#65a30d',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pt: 4,
                    pb: 2.2,
                    px: 2,
                    boxShadow: '0 12px 28px rgba(101, 163, 13, 0.28)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 18px 36px rgba(101, 163, 13, 0.38)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                    <GraduateIcon />
                  </Box>
                  <HosannaCardPill />
                </Box>

                {/* Título inferior */}
                <Typography
                  sx={{
                    mt: 2.8,
                    mb: 1.5,
                    fontWeight: 900,
                    fontSize: '1.05rem',
                    color: '#0f172a',
                    letterSpacing: '0.02em',
                    textTransform: 'none',
                  }}
                >
                  excelencia académica
                </Typography>

                {/* Texto exacto */}
                <Box sx={{ color: '#1e293b', fontSize: '0.98rem', lineHeight: 1.6, maxWidth: 280, mx: 'auto' }}>
                  <QuoteSlashesTop />
                  <Box component="span" sx={{ fontSize: '1.05rem', fontWeight: 600 }}>
                    Liderazgo Creativo:
                  </Box>
                  <br />
                  Líder en liderar
                  <br />
                  la próxima generación.
                  <br />
                  Con <em>innovación constante</em>
                  <br />
                  y <em>participación</em>
                  <br />
                  <em>activa</em> de nuestros
                  <br />
                  estudiantes.
                  <QuoteSlashesBottom />
                </Box>
              </Box>
            </Grid>

            {/* Columna 3: Formación Integral */}
            <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up" data-aos-delay="200">
              <Box sx={{ textAlign: 'center' }}>
                {/* Tarjeta Amarilla */}
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 240,
                    height: 270,
                    mx: 'auto',
                    borderRadius: '24px',
                    bgcolor: '#ca8a04',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pt: 4,
                    pb: 2.2,
                    px: 2,
                    boxShadow: '0 12px 28px rgba(202, 138, 4, 0.28)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 18px 36px rgba(202, 138, 4, 0.38)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                    <ReadingBookIcon />
                  </Box>
                  <HosannaCardPill />
                </Box>

                {/* Título inferior */}
                <Typography
                  sx={{
                    mt: 2.8,
                    mb: 1.5,
                    fontWeight: 900,
                    fontSize: '1.05rem',
                    color: '#0f172a',
                    letterSpacing: '0.03em',
                  }}
                >
                  FORMACIÓN integral
                </Typography>

                {/* Texto exacto */}
                <Box sx={{ color: '#1e293b', fontSize: '0.98rem', lineHeight: 1.7, maxWidth: 280, mx: 'auto' }}>
                  <QuoteSlashesTop />
                  Ser Honrado
                  <br />
                  Ser Solidario
                  <br />
                  Ser Noble
                  <QuoteSlashesBottom />
                </Box>
              </Box>
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
