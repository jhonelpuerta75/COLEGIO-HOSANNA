import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import Grid from '@mui/material/Grid';
import { admissionConfig } from '../config/admissionConfig';

export default function Hero() {
  return (
    <Box
      id="inicio"
      sx={{
        position: 'relative',
        minHeight: { xs: '90vh', md: '88vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      <Box
        component="img"
        src="/hero-school.webp"
        alt="Colegio Hosanna campus"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.08,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(to bottom, #0a1f44 0%, #1e88e5 40%, #90caf9 65%, #ffffff 90%)',
            md: 'linear-gradient(to right, #0a1f44 0%, #1e88e5 20%, #90caf9 50%, #ffffff 90%)'
          }
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 } }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7.5 }} data-aos="fade-right">
            <Chip
              icon={<VerifiedIcon sx={{ fontSize: '1rem !important' }} />}
              label="Institución Educativa Privada · Desde 1993"
              size="small"
              sx={{
                mb: 3,
                bgcolor: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(8px)',
                fontWeight: 500,
                fontSize: '0.78rem',
                '& .MuiChip-icon': { color: '#98E4F4' },
              }}
            />

            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.6rem' },
                lineHeight: 1.12,
                fontWeight: 900,
                mb: 3,
              }}
            >
              Porque somos hechura de Dios, creados en Cristo
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: 'linear-gradient(90deg, #98E4F4, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mt: 1
                }}
              >
                Jesús para buenas obras
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 400,
                lineHeight: 1.65,
                mb: 4.5,
                maxWidth: 520,
              }}
            >
              Formamos líderes íntegros desde el nivel Inicial hasta Secundaria, combinando excelencia académica
              y una sólida cosmovisión cristiana.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                href="#admision"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#e7ebda',
                  color: '#0a1f44',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': { bgcolor: '#d8dcc8' },
                }}
              >
                Solicitar Admisión {admissionConfig.admissionYear}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#nosotros"
                startIcon={<SchoolIcon />}
                sx={{
                  borderColor: 'rgba(255,255,255,0.4)',
                  color: 'rgba(255,255,255,0.9)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.06)',
                  },
                }}
              >
                Conocer el colegio
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 5 }}
              sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255,255,255,0.15)' }}
            >
              {[
                { value: '34+', label: 'Años de experiencia' },
                { value: '3', label: 'Niveles educativos' },
                { value: '100%', label: 'Reconocida por MINEDU' },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    variant="h4"
                    sx={{ color: '#98E4F4', fontWeight: 700, lineHeight: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4.5 }} data-aos="fade-left" sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
            <Box
              component="img"
              src="/34aniv.png"
              alt="34 Aniversario"
              sx={{
                width: { xs: '200px', sm: '280px', md: '100%' },
                maxWidth: '430px',
                height: 'auto',
                flexShrink: 0,

                animation: 'float 6s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-15px)' },
                }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
