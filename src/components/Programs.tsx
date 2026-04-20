import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';

const levels = [
  {
    title: 'Nivel Inicial',
    subtitle: '3, 4 y 5 años',
    image: '/level-inicial.webp',
    icon: <ChildCareIcon />,
    color: '#046bd2',
    description:
      'Estimulamos el desarrollo integral del niño mediante el juego, la creatividad y el amor. Un ambiente seguro y cálido donde cada pequeño descubre el mundo con confianza.',
    tags: ['Estimulación Temprana', 'Valores Bíblicos', 'Creatividad'],
  },
  {
    title: 'Nivel Primaria',
    subtitle: '1° a 6° Grado',
    image: '/level-primaria.webp',
    icon: <MenuBookIcon />,
    color: '#034a93',
    description:
      'Consolidamos hábitos de estudio, pensamiento crítico y exploración. Desarrollamos las capacidades académicas e intelectuales con una perspectiva bíblica integral.',
    tags: ['Pensamiento Crítico', 'STEM', 'Formación Bíblica'],
  },
  {
    title: 'Nivel Secundaria',
    subtitle: '1° a 5° Año',
    image: '/level-secundaria.webp',
    icon: <SchoolIcon />,
    color: '#0a1f44',
    description:
      'Preparamos jóvenes para los desafíos del mundo moderno con excelencia académica, liderazgo y una sólida identidad cristiana, listos para la educación superior.',
    tags: ['Excelencia Académica', 'Liderazgo', 'Pre-Universitario'],
  },
];

export default function Programs() {
  return (
    <Box
      id="niveles"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0a1f44 0%, #046bd2 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box 
          data-aos="fade-up"
          sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.8rem' }}
          >
            Oferta Educativa
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', mt: 1, mb: 2 }}>
            Nuestros Niveles Educativos
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 580, mx: 'auto', lineHeight: 1.8 }}
          >
            Ofrecemos una educación continua y articulada desde los 3 años hasta concluir la secundaria, con reconocimiento oficial del Ministerio de Educación.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {levels.map((level, index) => (
            <Grid 
              size={{ xs: 12, md: 4 }} 
              key={level.title} 
              id={level.title.toLowerCase().replace('nivel ', '')}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: 'none',
                  borderRadius: 3,
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: 8 },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={level.image}
                    alt={level.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to top, ${level.color}ee, transparent 60%)`,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2.5,
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: '8px',
                          bgcolor: 'rgba(255,255,255,0.15)',
                          backdropFilter: 'blur(8px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                        }}
                      >
                        {level.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, lineHeight: 1.1 }}>
                          {level.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          {level.subtitle}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2.5 }}
                  >
                    {level.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                    {level.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(4,107,210,0.08)',
                          color: 'primary.dark',
                          fontWeight: 500,
                          fontSize: '0.72rem',
                          border: '1px solid rgba(4,107,210,0.15)',
                        }}
                      />
                    ))}
                  </Stack>
                  <Button
                    variant="text"
                    size="small"
                    component={level.title === 'Nivel Inicial' ? RouterLink : 'a'}
                    to={level.title === 'Nivel Inicial' ? '/inicial' : undefined}
                    href={level.title === 'Nivel Inicial' ? undefined : '#admision'}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ color: 'primary.main', fontWeight: 600, p: 0, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Ver detalles del nivel
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
