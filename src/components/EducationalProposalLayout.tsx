import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface EducationalProposalLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export default function EducationalProposalLayout({
  category,
  title,
  subtitle,
  icon,
}: EducationalProposalLayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Header */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'white',
          pt: { xs: 15, md: 18 },
          pb: { xs: 8, md: 10 },
          backgroundImage:
            'linear-gradient(rgba(10, 31, 68, 0.88), rgba(10, 31, 68, 0.88)), url(https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md" data-aos="fade-up">
          <Chip
            label={category}
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.12)',
              color: 'white',
              fontWeight: 700,
              letterSpacing: '0.1em',
              fontSize: '0.75rem',
              mb: 2,
              backdropFilter: 'blur(4px)',
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: 700,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            {subtitle}
          </Typography>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 }, flexGrow: 1 }}>

        {/* Content Card with Placeholder Notice */}
        <Card
          data-aos="fade-up"
          sx={{
            p: { xs: 4, sm: 6, md: 8 },
            textAlign: 'center',
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
            bgcolor: 'background.paper',
            maxWidth: 860,
            mx: 'auto',
          }}
        >
          {icon && (
            <Box
              sx={{
                width: 96,
                height: 96,
                borderRadius: '50%',
                bgcolor: 'rgba(4, 107, 210, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              {icon}
            </Box>
          )}

          <Typography variant="h3" sx={{ fontWeight: 800, color: 'secondary.main', mb: 2 }}>
            {title}
          </Typography>

          <Chip
            icon={<ConstructionIcon />}
            label="Contenido en preparación"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 700, mb: 3 }}
          />

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.85,
              fontSize: '1.05rem',
              maxWidth: 620,
              mx: 'auto',
              mb: 4,
            }}
          >
            Esta sección corresponde a <strong>{title}</strong> dentro de nuestra Propuesta Educativa. El plan
            detallado, temarios y recursos multimedia se están preparando para el próximo periodo académico.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Button
              component={RouterLink}
              to="/propuesta-educativa/areas-de-desarrollo"
              variant="contained"
              startIcon={<ArrowBackIcon />}
              sx={{ px: 3.5, py: 1.2 }}
            >
              Ver Áreas de Desarrollo
            </Button>
            <Button
              component={RouterLink}
              to="/#contacto"
              variant="outlined"
              sx={{ px: 3.5, py: 1.2 }}
            >
              Consultar Información
            </Button>
          </Stack>
        </Card>
      </Container>

      <Footer />
    </Box>
  );
}
