import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import HubIcon from '@mui/icons-material/Hub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const methodologyPillars = [
  {
    icon: <SchoolIcon sx={{ fontSize: 32 }} />,
    title: 'Programa Pedagógico',
    description: 'Atendemos los tres niveles con una propuesta educativa moderna enfocado en la formación integral.',
    color: '#046bd2'
  },
  {
    icon: <LaptopMacIcon sx={{ fontSize: 32 }} />,
    title: 'Blended Learning',
    description: 'Combinamos el E-learning con encuentros presenciales utilizando tecnología de vanguardia.',
    color: '#034a93'
  },
  {
    icon: <HubIcon sx={{ fontSize: 32 }} />,
    title: 'Proyectos por Áreas',
    description: 'Aprendizajes significativos útiles para la vida que trascienden las aulas de estudio.',
    color: '#0a1f44'
  }
];

export default function Methodology() {
  return (
    <Box id="metodologia" sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid 
            size={{ xs: 12, md: 5 }}
            data-aos="fade-right"
          >
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.8rem' }}
            >
              Nuestra Propuesta
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
              Metodología Educativa
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 4 }}>
              En el Colegio Hosanna, implementamos un modelo pedagógico dinámico y colaborativo que prepara a los estudiantes para los retos del siglo XXI.
            </Typography>

            <Stack spacing={4} sx={{ mb: 4 }}>
              {methodologyPillars.map((pillar) => (
                <Box key={pillar.title} sx={{ display: 'flex', gap: 2.5 }}>
                  <Box sx={{
                    color: pillar.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '14px',
                    bgcolor: `${pillar.color}10`,
                    flexShrink: 0
                  }}>
                    {pillar.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{pillar.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {pillar.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            <Button 
              component={RouterLink}
              to="/metodologia"
              variant="contained" 
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4 }}
            >
              Conocer más detalles
            </Button>
          </Grid>

          <Grid 
            size={{ xs: 12, md: 7 }}
            data-aos="fade-left"
          >
            <Box sx={{ position: 'relative' }}>
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 400,
                  borderRadius: 6, 
                  bgcolor: 'rgba(4,107,210,0.03)',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 6,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.08)' 
                }} 
              >
                <Box 
                  component="img"
                  src="/logo-hosanna.png"
                  sx={{ width: '100%', maxWidth: 300, height: 'auto', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.1))' }}
                />
              </Box>
              <Box sx={{
                position: 'absolute',
                top: -30,
                right: -30,
                bgcolor: 'primary.main',
                color: 'white',
                p: 4,
                borderRadius: 3,
                boxShadow: 10,
                display: { xs: 'none', lg: 'block' },
                maxWidth: 240
              }}>
                <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>Moderno</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Integración total de plataformas digitales y aprendizaje híbrido.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
