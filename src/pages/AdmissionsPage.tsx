import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentsIcon from '@mui/icons-material/Payments';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Groups3Icon from '@mui/icons-material/Groups3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PsychologyIcon from '@mui/icons-material/Psychology';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DescriptionIcon from '@mui/icons-material/Description';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
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
            background: 'linear-gradient(rgba(10, 31, 68, 0.9), rgba(10, 31, 68, 0.9)), url(/hs-photos/fondo4.jpeg)',
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
          <Box sx={{ mb: 7 }}>
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

          {/* Procedimiento y Cronograma de Matrícula */}
          <Box
            data-aos="fade-up"
            sx={{
              mb: 8,
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              bgcolor: 'white',
              border: '1px solid',
              borderColor: 'rgba(4, 107, 210, 0.18)',
              borderLeft: '6px solid',
              borderLeftColor: 'primary.main',
              boxShadow: '0 8px 30px rgba(4, 107, 210, 0.06)',
            }}
          >
            {/* Procedimiento */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems={{ xs: 'flex-start', sm: 'flex-start' }} sx={{ mb: 3 }}>
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  width: 48,
                  height: 48,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 14px rgba(4, 107, 210, 0.3)',
                }}
              >
                <InfoOutlinedIcon sx={{ fontSize: 28 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    mb: 0.8,
                  }}
                >
                  Procedimiento de Matrícula
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    textAlign: 'justify',
                  }}
                >
                  La Matrícula para el Año {admissionConfig.admissionYear} se hará única y exclusivamente a través de la plataforma <strong>SIANET</strong>; en el siguiente cronograma y con los requisitos que se detallan a continuación en caso presente dificultades llamar al área de secretaría, escribir por Whatsapp a <strong>SOPORTE T.I</strong> dentro de la fecha indicada o acercarse al colegio.
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ my: 3, borderColor: 'rgba(4, 107, 210, 0.12)' }} />

            {/* Cronograma de Matrícula */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'white',
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CalendarMonthIcon sx={{ fontSize: 20 }} />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 800,
                    color: 'secondary.main',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Cronograma de Matrícula
                </Typography>
              </Box>

              <Grid container spacing={2.5}>
                {/* Matrícula General */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      bgcolor: 'rgba(4, 107, 210, 0.04)',
                      border: '1px solid',
                      borderColor: 'rgba(4, 107, 210, 0.16)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 4px 16px rgba(4, 107, 210, 0.08)',
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 800,
                        color: 'primary.main',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        mb: 0.5,
                      }}
                    >
                      Período General
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1.5 }}>
                      Matrícula General
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      Del <strong>22 de diciembre de 2026</strong> al <strong>20 de enero de 2027</strong>.
                    </Typography>
                  </Box>
                </Grid>

                {/* Matrícula Especial */}
                <Grid size={{ xs: 12, md: 7 }}>
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      bgcolor: 'rgba(26, 58, 138, 0.03)',
                      border: '1px solid',
                      borderColor: 'rgba(26, 58, 138, 0.16)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        boxShadow: '0 4px 16px rgba(26, 58, 138, 0.08)',
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 800,
                        color: 'secondary.main',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        mb: 0.5,
                      }}
                    >
                      Cambio de Nivel Educativo · Sólo grados específicos
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main', mb: 0.5 }}>
                      Matrícula Especial
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 1.5 }}>
                      1er Grado de Primaria y 1er Año de Secundaria 2027
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 1.5 }}>
                      Del <strong>24 de noviembre 2026</strong> al <strong>04 de diciembre 2026</strong>.
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic', lineHeight: 1.6 }}>
                      (Con la finalidad de disponer las vacantes para el 2027, y preparar las aulas y los entornos educativos necesarios).
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
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

                <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                  Para proceder al pago de la matrícula y acceder al sistema de matrícula del Colegio (SIANET),
                  es indispensable que la cuenta de la familia no mantenga deudas pendientes del año lectivo
                  2026.
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
                    icon: <Groups3Icon />
                  },
                  {
                    cat: 'EXCELENCIA',
                    title: 'Media Beca (1/2)',
                    desc: 'Para alumnos destacados con promedio ≥ 92%. Requiere historial de conducta sobresaliente.',
                    icon: <WorkspacePremiumIcon />
                  },
                  {
                    cat: 'MÉRITO',
                    title: 'Cuarto de Beca (1/4)',
                    desc: 'Otorgado a promedios entre 89% y 91%. Incentivamos el esfuerzo constante.',
                    icon: <PsychologyIcon />
                  },
                  {
                    cat: 'REQUISITOS',
                    title: 'Asistencia y Compromiso',
                    desc: 'Las becas requieren un mínimo del 95% de asistencia para mantenerse vigentes.',
                    icon: <CheckCircleIcon />
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

        {/* Sección: Cronograma de Pensiones, Historial de 5 años y Otros Pagos */}
        <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 11 }, borderTop: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }} data-aos="fade-up">
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  bgcolor: 'rgba(4, 107, 210, 0.08)',
                  px: 2,
                  py: 0.5,
                  borderRadius: 10,
                  mb: 1.5,
                }}
              >
                Transparencia e Información Institucional
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'secondary.main', mb: 2 }}>
                Cronograma de Pensiones y Tarifas Oficiales
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 750, mx: 'auto', lineHeight: 1.7 }}>
                Calendario de cuotas mensuales, evolución histórica de costos de los últimos 5 años y conceptos de pagos administrativos en cumplimiento de la normativa educativa.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {/* 2.3 Cronograma de Pensiones de Enseñanza */}
              <Grid size={{ xs: 12, lg: 6 }} data-aos="fade-right">
                <Card
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'rgba(4, 107, 210, 0.16)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2.5,
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CalendarMonthIcon sx={{ fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main', lineHeight: 1.2 }}>
                        2.3 Cronograma de Pensiones de Enseñanza
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                        Pago Mensual: (10 cuotas al año)
                      </Typography>
                    </Box>
                  </Box>

                  <TableContainer
                    sx={{
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      overflow: 'hidden',
                      mt: 1.5,
                    }}
                  >
                    <Table size="small">
                      <TableHead sx={{ bgcolor: 'secondary.main' }}>
                        <TableRow>
                          <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2 }}>MES</TableCell>
                          <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>ÚLTIMO DÍA DE PAGO</TableCell>
                          <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2 }}>MES</TableCell>
                          <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>ÚLTIMO DÍA DE PAGO</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          { m1: 'Marzo', d1: '31/03/2027', m2: 'Agosto', d2: '31/08/2027' },
                          { m1: 'Abril', d1: '30/04/2027', m2: 'Setiembre', d2: '30/09/2027' },
                          { m1: 'Mayo', d1: '31/05/2027', m2: 'Octubre', d2: '31/10/2027' },
                          { m1: 'Junio', d1: '30/06/2027', m2: 'Noviembre', d2: '30/11/2027' },
                          { m1: 'Julio', d1: '31/07/2027', m2: 'Diciembre', d2: '15/12/2027' },
                        ].map((row, idx) => (
                          <TableRow
                            key={idx}
                            sx={{
                              bgcolor: idx % 2 === 0 ? 'rgba(4, 107, 210, 0.02)' : 'white',
                              '&:hover': { bgcolor: 'rgba(4, 107, 210, 0.06)' },
                            }}
                          >
                            <TableCell sx={{ fontWeight: 600, py: 1.2 }}>{row.m1}</TableCell>
                            <TableCell sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 700, py: 1.2 }}>{row.d1}</TableCell>
                            <TableCell sx={{ fontWeight: 600, py: 1.2 }}>{row.m2}</TableCell>
                            <TableCell
                              sx={{
                                textAlign: 'center',
                                color: row.m2 === 'Diciembre' ? '#d32f2f' : 'primary.main',
                                fontWeight: 700,
                                py: 1.2,
                              }}
                            >
                              {row.d2}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1.5, display: 'block', fontStyle: 'italic' }}>
                    * La cuota del mes de diciembre tiene fecha límite de pago el 15/12/2027.
                  </Typography>
                </Card>
              </Grid>

              {/* Otros Conceptos de Pagos + Nota Legal */}
              <Grid size={{ xs: 12, lg: 6 }} data-aos="fade-left">
                <Card
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'rgba(4, 107, 210, 0.16)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: 2.5,
                          bgcolor: 'secondary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ReceiptLongIcon sx={{ fontSize: 22 }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main', lineHeight: 1.2 }}>
                          Otros Conceptos de Pagos
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                          Trámites y servicios adicionales
                        </Typography>
                      </Box>
                    </Box>

                    <TableContainer
                      sx={{
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        overflow: 'hidden',
                        mt: 1.5,
                      }}
                    >
                      <Table size="small">
                        <TableHead sx={{ bgcolor: '#eceff1' }}>
                          <TableRow>
                            <TableCell sx={{ color: 'secondary.main', fontWeight: 800, py: 1.2 }}>
                              DESCRIPCIÓN DEL PAGO
                            </TableCell>
                            <TableCell sx={{ color: 'secondary.main', fontWeight: 800, py: 1.2, textAlign: 'right' }}>
                              TOTAL
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {[
                            { desc: 'CERTIFICADO DE ESTUDIOS (FÍSICO O DIGITAL)', total: 'S/. 100.00' },
                            { desc: 'TRAMITE DE TRASLADO', total: 'S/. 100.00' },
                            { desc: 'CONSTANCIAS', total: 'S/. 50.00' },
                            { desc: 'EXÁMENES DE REPROGRAMACIÓN', total: 'S/. 100.00 – (x Curso)' },
                          ].map((item, idx) => (
                            <TableRow
                              key={idx}
                              sx={{
                                bgcolor: idx % 2 === 0 ? 'white' : 'rgba(10,31,68,0.02)',
                                '&:hover': { bgcolor: 'rgba(4, 107, 210, 0.04)' },
                              }}
                            >
                              <TableCell sx={{ fontWeight: 600, py: 1.3, color: 'text.primary' }}>
                                {item.desc}
                              </TableCell>
                              <TableCell sx={{ textAlign: 'right', fontWeight: 800, color: 'primary.main', py: 1.3 }}>
                                {item.total}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>

                  {/* Nota Legal del Artículo 16° */}
                  <Box
                    sx={{
                      mt: 3,
                      p: 2.5,
                      borderRadius: 3,
                      border: '2px solid',
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(4, 107, 210, 0.04)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                    }}
                  >
                    <InfoOutlinedIcon sx={{ color: 'primary.main', mt: 0.3, fontSize: 22, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontWeight: 500 }}>
                      El Colegio se reserva el derecho de entregar el certificado de estudios a aquellos alumnos que mantengan meses impagos, de acuerdo a lo establecido con el <strong>Artículo 16° de la Ley de Centros Educativos</strong>.
                    </Typography>
                  </Box>
                </Card>
              </Grid>

              {/* 2.4 Historial de costos de los últimos 5 años */}
              <Grid size={{ xs: 12 }} data-aos="fade-up">
                <Card
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'rgba(4, 107, 210, 0.16)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2.5,
                        bgcolor: 'secondary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <HistoryEduIcon sx={{ fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: 'secondary.main' }}>
                        2.4 Historial de Costos de los Últimos 5 Años
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Evolución tarifaria del costo de matrícula y pensiones mensuales (2022 - 2026)
                      </Typography>
                    </Box>
                  </Box>

                  <Grid container spacing={4}>
                    {/* Tabla Matrícula */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 800,
                          color: 'primary.main',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          mb: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        MATRÍCULA
                      </Typography>
                      <TableContainer sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', overflowX: 'auto' }}>
                        <Table size="small">
                          <TableHead sx={{ bgcolor: 'primary.main' }}>
                            <TableRow>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2 }}>DESCRIPCIÓN</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2022</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2023</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2024</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2025</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2026</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {[
                              { nivel: 'Inicial', y22: 'S/. 550.00', y23: 'S/. 590.00', y24: 'S/. 610.00', y25: 'S/. 610.00', y26: 'S/. 650.00' },
                              { nivel: 'Primaria', y22: 'S/. 580.00', y23: 'S/. 630.00', y24: 'S/. 670.00', y25: 'S/. 670.00', y26: 'S/. 710.00' },
                              { nivel: 'Secundaria', y22: 'S/. 580.00', y23: 'S/. 670.00', y24: 'S/. 700.00', y25: 'S/. 700.00', y26: 'S/. 740.00' },
                            ].map((row, idx) => (
                              <TableRow
                                key={idx}
                                sx={{
                                  bgcolor: idx % 2 === 0 ? 'rgba(4, 107, 210, 0.02)' : 'white',
                                  '&:hover': { bgcolor: 'rgba(4, 107, 210, 0.05)' },
                                }}
                              >
                                <TableCell sx={{ fontWeight: 700, py: 1.2 }}>{row.nivel}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, color: 'text.secondary' }}>{row.y22}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, color: 'text.secondary' }}>{row.y23}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, color: 'text.secondary' }}>{row.y24}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, color: 'text.secondary' }}>{row.y25}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, fontWeight: 800, color: 'primary.main' }}>{row.y26}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>

                    {/* Tabla Pensiones */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 800,
                          color: 'secondary.main',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          mb: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        PENSIONES
                      </Typography>
                      <TableContainer sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', overflowX: 'auto' }}>
                        <Table size="small">
                          <TableHead sx={{ bgcolor: 'secondary.main' }}>
                            <TableRow>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2 }}>DESCRIPCIÓN</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2022</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2023</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2024</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2025</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 700, py: 1.2, textAlign: 'center' }}>2026</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {[
                              { nivel: 'Inicial', y22: 'S/. 550.00', y23: 'S/. 590.00', y24: 'S/. 610.00', y25: 'S/. 610.00', y26: 'S/. 650.00' },
                              { nivel: 'Primaria', y22: 'S/. 580.00', y23: 'S/. 630.00', y24: 'S/. 670.00', y25: 'S/. 670.00', y26: 'S/. 710.00' },
                              { nivel: 'Secundaria', y22: 'S/. 580.00', y23: 'S/. 670.00', y24: 'S/. 700.00', y25: 'S/. 700.00', y26: 'S/. 740.00' },
                            ].map((row, idx) => (
                              <TableRow
                                key={idx}
                                sx={{
                                  bgcolor: idx % 2 === 0 ? 'rgba(4, 107, 210, 0.02)' : 'white',
                                  '&:hover': { bgcolor: 'rgba(4, 107, 210, 0.05)' },
                                }}
                              >
                                <TableCell sx={{ fontWeight: 700, py: 1.2 }}>{row.nivel}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, color: 'text.secondary' }}>{row.y22}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, color: 'text.secondary' }}>{row.y23}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, color: 'text.secondary' }}>{row.y24}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, color: 'text.secondary' }}>{row.y25}</TableCell>
                                <TableCell sx={{ textAlign: 'center', py: 1.2, fontWeight: 800, color: 'secondary.main' }}>{row.y26}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Sección: Documentos Administrativos */}
        <Box sx={{ bgcolor: 'rgba(4, 107, 210, 0.03)', py: { xs: 8, md: 10 }, borderTop: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }} data-aos="fade-up">
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  bgcolor: 'rgba(4, 107, 210, 0.08)',
                  px: 2,
                  py: 0.5,
                  borderRadius: 10,
                  mb: 1.5,
                }}
              >
                Descarga de Documentación Oficial
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'secondary.main', mb: 2 }}>
                Documentos Administrativos
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto', lineHeight: 1.7 }}>
                Haga clic en cualquiera de los siguientes documentos para descargarlo directamente a su dispositivo.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {[
                '2027 - BENEFICIOS Y SERVICIOS COMPLEMENTARIOS.docx',
                '2027 - CONDICIONES ECONMICAS.docx',
                '2027 - HORARIO DE CLASES.docx',
                '2027 - REQUISITOS DE ADMISION.docx',
              ].map((docName, idx) => (
                <Grid size={{ xs: 12, md: 6 }} key={idx} data-aos="zoom-in" data-aos-delay={idx * 80}>
                  <Card
                    component="a"
                    href={encodeURI(`/documentos/${docName}`)}
                    download={docName}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 2,
                      textDecoration: 'none',
                      color: 'inherit',
                      borderRadius: 4,
                      bgcolor: 'white',
                      border: '1px solid',
                      borderColor: 'rgba(4, 107, 210, 0.16)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 8px 24px rgba(4, 107, 210, 0.12)',
                        transform: 'translateY(-3px)',
                        '& .doc-icon': {
                          bgcolor: 'primary.main',
                          color: 'white',
                          transform: 'scale(1.05)',
                        },
                        '& .download-btn': {
                          bgcolor: 'primary.main',
                          color: 'white',
                        },
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0, flex: 1 }}>
                      <Box
                        className="doc-icon"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 3,
                          bgcolor: 'rgba(4, 107, 210, 0.08)',
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <DescriptionIcon sx={{ fontSize: 26 }} />
                      </Box>
                      <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            display: 'block',
                            mb: 0.3,
                          }}
                        >
                          DOCX · Microsoft Word
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 800,
                            color: 'secondary.main',
                            wordBreak: 'break-word',
                            lineHeight: 1.4,
                          }}
                        >
                          {docName}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      className="download-btn"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: 'rgba(10, 31, 68, 0.04)',
                        color: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <FileDownloadIcon sx={{ fontSize: 20 }} />
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

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
