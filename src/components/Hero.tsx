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
          background: 'linear-gradient(135deg, #ffffff 20%, #e6f1fc 100%)',
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
                bgcolor: 'rgba(4,107,210,0.1)',
                color: 'primary.main',
                border: '1px solid rgba(4,107,210,0.2)',
                backdropFilter: 'blur(8px)',
                fontWeight: 500,
                fontSize: '0.78rem',
                '& .MuiChip-icon': { color: 'primary.main' },
              }}
            />

            <Typography
              variant="h1"
              sx={{
                color: 'secondary.main',
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
                  background: 'linear-gradient(90deg, #046bd2, #3d8fe0)',
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
                color: 'text.secondary',
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
                  bgcolor: 'primary.main',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': { bgcolor: 'primary.dark' },
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
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    bgcolor: 'rgba(4,107,210,0.06)',
                  },
                }}
              >
                Conocer el colegio
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 5 }}
              sx={{ mt: 6, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}
            >
              {[
                { value: '34+', label: 'Años de experiencia' },
                { value: '3', label: 'Niveles educativos' },
                { value: '100%', label: 'Reconocida por MINEDU' },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    variant="h4"
                    sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
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
