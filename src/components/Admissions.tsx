import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Groups3Icon from '@mui/icons-material/Groups3';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { admissionConfig } from '../config/admissionConfig';

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
        para conocer vacantes, pensiones y requisitos.
      </>
    ),
  },
  {
    number: '02',
    icon: <AssignmentIcon />,
    title: 'Registro Virtual',
    description: 'Complete la ficha del postulante en nuestra plataforma SIANET.',
  },
  {
    number: '03',
    icon: <UploadFileIcon />,
    title: 'Entrega de Documentos',
    description: 'Carga de expedientes y requisitos en formato digital.',
  },
  {
    number: '04',
    icon: <PsychologyIcon />,
    title: 'Evaluación',
    description: 'Evaluación diagnóstica según el grado y nivel escolar.',
  },
  {
    number: '05',
    icon: <Groups3Icon />,
    title: 'Entrevista Familiar',
    description: 'Encuentro con el equipo directivo y psicopedagógico.',
  },
  {
    number: '06',
    icon: <CheckCircleIcon />,
    title: 'Confirmación de Matrícula',
    description: 'Aceptación de vacante y pago oficial para asegurar el cupo.',
  },
];

export default function Admissions() {
  return (
    <Box
      id="admision"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <Box 
          data-aos="fade-up"
          sx={{ textAlign: 'center', mb: 6 }}
        >
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
            Ruta de Admisión Paso a Paso
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Admisión {admissionConfig.admissionYear}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto', lineHeight: 1.7 }}
          >
            Un proceso ágil, guiado y 100% transparente para las familias.
            Inscripciones del {admissionConfig.registrationStartDate} al {admissionConfig.registrationEndDate}, sujeto a vacantes.
          </Typography>
        </Box>

        {/* 6 Steps in 1 single row on desktop, 3 per row on tablet, compact list on mobile */}
        <Grid 
          container 
          spacing={{ xs: 1.5, sm: 2, md: 1.5, lg: 2 }} 
          sx={{ mb: 6, justifyContent: 'center' }}
        >
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <Grid 
                size={{ xs: 12, sm: 4, md: 2 }} 
                key={step.number}
                data-aos="zoom-in"
                data-aos-delay={index * 70}
              >
                <Box sx={{ position: 'relative', height: '100%' }}>
                  {/* Flecha conectora entre pasos (visible solo en pantalla de escritorio en una fila) */}
                  {!isLast && (
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'flex' },
                        position: 'absolute',
                        top: { md: '34%', lg: '35%' },
                        right: { md: -11, lg: -14 },
                        transform: 'translateY(-50%)',
                        zIndex: 3,
                        width: { md: 20, lg: 24 },
                        height: { md: 20, lg: 24 },
                        borderRadius: '50%',
                        bgcolor: 'background.paper',
                        border: '1.5px solid rgba(4, 107, 210, 0.25)',
                        color: 'primary.main',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                        pointerEvents: 'none',
                        '& svg': { fontSize: { md: 14, lg: 16 } },
                      }}
                    >
                      <ChevronRightIcon />
                    </Box>
                  )}

                  <Card 
                    sx={{ 
                      height: '100%', 
                      p: { xs: 2, sm: 2, md: 1.8, lg: 2.2 },
                      borderRadius: 3.5,
                      bgcolor: 'background.paper',
                      border: '1.5px solid',
                      borderColor: isLast ? 'rgba(16, 185, 129, 0.35)' : 'rgba(4, 107, 210, 0.1)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      flexDirection: { xs: 'row', sm: 'column' },
                      alignItems: 'center',
                      gap: { xs: 2, sm: 0 },
                      textAlign: { xs: 'left', sm: 'center' },
                      '&:hover': { 
                        transform: 'translateY(-6px)',
                        boxShadow: isLast
                          ? '0 12px 24px rgba(16, 185, 129, 0.18)'
                          : '0 12px 24px rgba(4, 107, 210, 0.15)',
                        borderColor: isLast ? '#10b981' : 'primary.main',
                        '& .step-icon': {
                          transform: 'scale(1.08)',
                        },
                      }
                    }}
                  >
                    {/* Indicador de paso e Ícono */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Chip
                        label={`PASO ${step.number}`}
                        size="small"
                        sx={{
                          height: 20,
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          borderRadius: '6px',
                          bgcolor: isLast ? 'rgba(16, 185, 129, 0.12)' : 'rgba(4, 107, 210, 0.08)',
                          color: isLast ? '#059669' : 'primary.main',
                          mb: { xs: 0.6, sm: 1.2 },
                        }}
                      />
                      <Box
                        className="step-icon"
                        sx={{
                          width: { xs: 44, sm: 46, lg: 50 },
                          height: { xs: 44, sm: 46, lg: 50 },
                          borderRadius: '14px',
                          background: isLast 
                            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                            : 'linear-gradient(135deg, #046bd2 0%, #024a94 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          mb: { xs: 0, sm: 1.5 },
                          boxShadow: isLast 
                            ? '0 6px 14px rgba(16, 185, 129, 0.28)' 
                            : '0 6px 14px rgba(4, 107, 210, 0.22)',
                          transition: 'transform 0.3s ease',
                          '& svg': { fontSize: { xs: 22, sm: 24, lg: 26 } },
                        }}
                      >
                        {step.icon}
                      </Box>
                    </Box>

                    {/* Texto informativo */}
                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          fontWeight: 700,
                          fontSize: { xs: '0.95rem', sm: '0.88rem', md: '0.82rem', lg: '0.9rem' },
                          lineHeight: 1.3,
                          mb: 0.6,
                          color: isLast ? '#059669' : 'text.primary',
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: { xs: '0.82rem', sm: '0.78rem', md: '0.72rem', lg: '0.78rem' },
                          lineHeight: 1.45,
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            );
          })}
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
              py: 1.8,
              borderRadius: 3,
              fontSize: '1.05rem',
              fontWeight: 800,
              boxShadow: '0 16px 32px rgba(4,107,210,0.2)'
            }}
          >
            Ver requisitos y pensiones completas
          </Button>
          <Typography variant="body2" sx={{ mt: 2.5, color: 'text.secondary', opacity: 0.85 }}>
            Pensiones {admissionConfig.admissionYear} desde S/. {admissionConfig.costs.inicial.tuition} (Nivel Inicial). Proceso abierto hasta el {admissionConfig.registrationEndDateShort}.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
