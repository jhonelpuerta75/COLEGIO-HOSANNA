import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: <InfoOutlinedIcon />,
    title: 'Solicitar información',
    description: (
      <>
        <Link href="#contacto" color="primary" sx={{ fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
          Contáctenos
        </Link>{' '}
        para recibir detalles sobre vacantes disponibles, pensiones y requisitos.
      </>
    ),
  },
  {
    number: '02',
    icon: <AssignmentIcon />,
    title: 'Registro Virtual',
    description: 'Complete el registro en la plataforma SIANET con los datos del postulante y documentos requeridos.',
  },
  {
    number: '03',
    icon: <PersonAddIcon />,
    title: 'Evaluación',
    description: 'El alumno pasa por el proceso de evaluación profesional según el nivel al que postula.',
  },
  {
    number: '04',
    icon: <CheckCircleIcon />,
    title: 'Matrícula confirmada',
    description: 'Al aprobar el proceso, realice la matrícula oficial a través de SIANET aceptando el reglamento y condiciones económicas.',
  },
];

const requirements = [
  'Partida de nacimiento original',
  'DNI del menor y padres/tutores',
  'Libreta de notas del año anterior',
  'Certificado de estudios',
  'Foto carnet reciente',
  'Constancia de vacunas',
];

export default function Admissions() {
  return (
    <Box
      id="admision"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box 
          data-aos="fade-up"
          sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Matrículas Abiertas"
            color="success"
            size="small"
            sx={{ mb: 2, fontWeight: 700 }}
          />
          <Typography
            variant="overline"
            sx={{ display: 'block', color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.8rem' }}
          >
            Proceso de Admisión
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Admisión 2026
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}
          >
            El período de inscripciones está abierto del 17 de octubre de 2025 al 20 de enero de 2026,
            sujeto a disponibilidad de vacantes.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {steps.map((step, index) => (
            <Grid 
              size={{ xs: 12, sm: 6, md: 3 }} 
              key={step.number}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Box sx={{ position: 'relative', height: '100%' }}>
                <Card sx={{ 
                  height: '100%', 
                  p: 4, 
                  textAlign: 'center', 
                  borderRadius: 4,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-10px)' }
                }}>
                  <CardContent sx={{ p: '0 !important' }}>
                    <Typography
                      variant="overline"
                      sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.8rem' }}
                    >
                      PASO {step.number}
                    </Typography>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '20px',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        my: 3,
                        color: 'white',
                        boxShadow: '0 10px 20px rgba(4,107,210,0.2)',
                        '& svg': { fontSize: 30 },
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }} data-aos="fade-up">
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/admision"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: { xs: 4, md: 6 },
              py: 2,
              borderRadius: 3,
              fontSize: '1.1rem',
              fontWeight: 800,
              boxShadow: '0 20px 40px rgba(4,107,210,0.2)'
            }}
          >
            Ver requisitos y pensiones completas
          </Button>
          <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary', opacity: 0.8 }}>
            Pensiones 2026 desde S/. 650.00 (Nivel Inicial). Proceso abierto hasta el 20 de Enero.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
