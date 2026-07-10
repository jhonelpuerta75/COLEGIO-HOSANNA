import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentsIcon from '@mui/icons-material/Payments';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Groups3Icon from '@mui/icons-material/Groups3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { admissionConfig } from '../config/admissionConfig';


const steps = [
  { number: '01', title: 'Registro en Sianet', desc: 'Inscripción virtual del postulante a través de nuestra plataforma oficial.' },
  { number: '02', title: 'Entrega de Documentos', desc: 'Carga de expedientes y requisitos solicitados en formato digital.' },
  { number: '03', title: 'Entrevista Familiar', desc: 'Encuentro con el equipo psicopedagógico y directivo.' },
  { number: '04', title: 'Confirmación', desc: 'Aceptación de vacante y pago de derecho de matrícula.' }
];

const AdmissionsPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      <main>
        {/* Page Header */}
        <Box 
          sx={{ 
            bgcolor: 'secondary.main', 
            color: 'white', 
            pt: { xs: 15, md: 20 }, 
            pb: { xs: 10, md: 12 },
            textAlign: 'center',
            background: 'linear-gradient(rgba(10, 31, 68, 0.9), rgba(10, 31, 68, 0.9)), url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Container maxWidth="md" data-aos="fade-up">
            <Typography variant="overline" sx={{ letterSpacing: 4, fontWeight: 700, color: 'primary.light' }}>
              PROCESO {admissionConfig.admissionYear}
            </Typography>
            <Typography variant="h1" sx={{ mt: 2, mb: 3, fontWeight: 900, fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Admisión y Matrícula
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6 }}>
              Bienvenidos a la familia Hosanna. Aquí encontrará toda la información necesaria para iniciar el camino educativo de su hijo con nosotros.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 10 }}>
          {/* Timeline Steps - Admission Process */}
          <Box sx={{ mb: 15 }}>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 8, fontWeight: 800 }}>Proceso de Admisión Paso a Paso</Typography>
            <Grid container spacing={3}>
              {steps.map((step, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', height: '100%', border: '1px solid', borderColor: 'divider', position: 'relative' }}>
                    <Typography variant="h1" sx={{ position: 'absolute', top: 10, right: 20, opacity: 0.05, fontWeight: 900, fontSize: '4rem' }}>{step.number}</Typography>
                    <Box sx={{ bgcolor: 'secondary.main', w: 40, h: 40, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', mb: 3 }}>
                      {idx === 0 ? <OpenInNewIcon fontSize="small" /> : <CheckCircleIcon fontSize="small" />}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>{step.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{step.desc}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={6}>
            {/* Costs & Levels Section */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                <PaymentsIcon color="primary" /> Inversión por Nivel {admissionConfig.admissionYear}
              </Typography>
              <Card sx={{ borderRadius: 6, overflow: 'hidden', border: '1px solid', borderColor: 'divider', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <Box sx={{ p: 0 }}>
                  <Grid container sx={{ bgcolor: 'secondary.main', color: 'white', p: 2, textAlign: 'center' }}>
                    <Grid size={{ xs: 4 }}><Typography variant="subtitle2" sx={{ fontWeight: 700 }}>NIVEL</Typography></Grid>
                    <Grid size={{ xs: 4 }}><Typography variant="subtitle2" sx={{ fontWeight: 700 }}>MATRÍCULA</Typography></Grid>
                    <Grid size={{ xs: 4 }}><Typography variant="subtitle2" sx={{ fontWeight: 700 }}>PENSIÓN (x10)</Typography></Grid>
                  </Grid>
                  {[
                    { level: 'Inicial', mat: admissionConfig.costs.inicial.enrollment, pen: admissionConfig.costs.inicial.tuition, color: 'rgba(4,107,210,0.05)' },
                    { level: 'Primaria', mat: admissionConfig.costs.primaria.enrollment, pen: admissionConfig.costs.primaria.tuition, color: 'white' },
                    { level: 'Secundaria', mat: admissionConfig.costs.secundaria.enrollment, pen: admissionConfig.costs.secundaria.tuition, color: 'rgba(4,107,210,0.05)' }
                  ].map((row, i) => (
                    <Grid container key={i} sx={{ p: 3, textAlign: 'center', bgcolor: row.color, alignItems: 'center', borderBottom: i < 2 ? '1px solid' : 'none', borderColor: 'divider' }}>
                      <Grid size={{ xs: 4 }}><Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{row.level}</Typography></Grid>
                      <Grid size={{ xs: 4 }}><Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 800 }}>S/. {row.mat}</Typography></Grid>
                      <Grid size={{ xs: 4 }}><Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 800 }}>S/. {row.pen}</Typography></Grid>
                    </Grid>
                  ))}
                </Box>
                <Box sx={{ p: 3, bgcolor: '#fffbed', borderTop: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="body2" sx={{ color: '#856404', display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ bgcolor: '#ffc107', borderRadius: '50%', p: 0.5, display: 'flex' }}><OpenInNewIcon sx={{ fontSize: 12, color: 'white' }} /></Box>
                    <strong>Beneficio por Pago Puntual:</strong> Descuento de S/. {admissionConfig.costs.discountOnTime} si cancela antes del último día del mes.
                  </Typography>
                </Box>
              </Card>

              {/* Sianet Box - Quick Access */}
              <Box sx={{ mt: 4, p: 4, bgcolor: 'primary.main', borderRadius: 6, color: 'white', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', right: -20, bottom: -20, opacity: 0.1 }}><AssignmentIcon sx={{ fontSize: 120 }} /></Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>Registro Virtual Sianet</Typography>
                <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                  Inicie su solicitud de vacante de forma 100% digital.
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 900, py: 1.5, borderRadius: 3, '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
                  href={admissionConfig.sianetFormUrl}
                  target="_blank"
                >
                  IR AL FORMULARIO DE ADMISIÓN
                </Button>
              </Box>
            </Grid>

            {/* Benefits & Scholarships - Timeline Style */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                <AutoAwesomeIcon color="primary" /> Plan de Ayuda Familiar y Becas
              </Typography>
              
              <Box sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'primary.light' }}>
                {[
                  { 
                    cat: 'AYUDA FAMILIAR', 
                    title: 'Descuento por Hermanos', 
                    desc: '2do hermano (10% desc), 3er hermano a más (40% desc). Aplicable en pensiones mensuales.', 
                    icon: <Groups3Icon/> 
                  },
                  { 
                    cat: 'EXCELENCIA', 
                    title: 'Media Beca (1/2)', 
                    desc: 'Para alumnos destacados con promedio ≥ 92%. Requiere historial de conducta sobresaliente.', 
                    icon: <WorkspacePremiumIcon/> 
                  },
                  { 
                    cat: 'MÉRITO', 
                    title: 'Cuarto de Beca (1/4)', 
                    desc: 'Otorgado a promedios entre 89% y 91%. Incentivamos el esfuerzo constante.', 
                    icon: <PsychologyIcon/> 
                  },
                  { 
                    cat: 'REQUISITOS', 
                    title: 'Asistencia y Compromiso', 
                    desc: 'Las becas requieren un mínimo del 95% de asistencia para mantenerse vigentes.', 
                    icon: <CheckCircleIcon/> 
                  }
                ].map((item, i) => (
                  <Box key={i} sx={{ mb: 4, position: 'relative' }}>
                    <Box sx={{ 
                      position: 'absolute', 
                      left: -26, 
                      top: 4, 
                      width: 12, 
                      height: 12, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main',
                      boxShadow: '0 0 0 4px white'
                    }} />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1.5 }}>{item.cat}</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, mt: 0.5, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{item.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* FAQ - Quick view */}
        <Box sx={{ bgcolor: 'rgba(10,31,68,0.02)', py: 12 }}>
          <Container maxWidth="md">
            <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 800, mb: 6 }}>Preguntas Frecuentes</Typography>
            <Stack spacing={3}>
              {[
                { q: '¿Cuál es la edad mínima para Inicial?', a: `Según MINEDU, el niño debe tener 3 años cumplidos al ${admissionConfig.ageCutoffDate}.` },
                { q: '¿Tienen prioridad los hermanos?', a: 'Sí, las familias que ya tienen hijos en la institución cuentan con prioridad en la asignación de vacantes.' },
                { q: '¿Cuándo cierran las inscripciones?', a: `Hasta el ${admissionConfig.registrationEndDate} o hasta agotar vacantes.` }
              ].map((faq, i) => (
                <Box key={i} sx={{ p: 4, bgcolor: 'white', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, color: 'primary.main' }}>{faq.q}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{faq.a}</Typography>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default AdmissionsPage;
