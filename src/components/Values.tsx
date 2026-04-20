import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const coreValues = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 32 }} />,
    title: 'Honradez',
    description: 'Actuamos con integridad, rectitud y transparencia en cada una de nuestras acciones.',
    color: '#046bd2'
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 32 }} />,
    title: 'Solidaridad',
    description: 'Fomentamos la empatía y el apoyo mutuo, reflejando el amor de Cristo hacia el prójimo.',
    color: '#034a93'
  },
  {
    icon: <MilitaryTechIcon sx={{ fontSize: 32 }} />,
    title: 'Nobleza',
    description: 'Buscamos la distinción moral y la generosidad de alma en nuestra convivencia diaria.',
    color: '#0a1f44'
  }
];

const pillars = [
  {
    icon: <AutoStoriesIcon sx={{ fontSize: 24 }} />,
    title: 'Fe Cristiana',
    description: 'Educación basada en la Palabra de Dios y una cosmovisión bíblica.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 24 }} />,
    title: 'Excelencia Académica',
    description: 'Potenciamos el pensamiento crítico para alcanzar el máximo potencial.',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 24 }} />,
    title: 'Formación Integral',
    description: 'Desarrollamos las dimensiones espiritual, intelectual y social.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 24 }} />,
    title: 'Ambiente Seguro',
    description: 'Espacio cálido donde cada estudiante se siente valorado.',
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 24 }} />,
    title: 'Innovación Educativa',
    description: 'Metodologías actuales para los desafíos del siglo XXI.',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 24 }} />,
    title: 'Alianza con los Padres',
    description: 'Colaboración estrecha con las familias en la educación.',
  },
];

export default function Values() {
  return (
    <Box id="valores" sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
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
              Nuestra Identidad
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
              Nuestros Valores Institucionales
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 4 }}>
              En el Colegio Hosanna, nuestra identidad se fundamenta en tres valores esenciales que guían nuestra conducta y formación de carácter.
            </Typography>

            <Stack spacing={3}>
              {coreValues.map((value) => (
                <Box key={value.title} sx={{ display: 'flex', gap: 2.5 }}>
                  <Box sx={{
                    color: value.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 56,
                    height: 56,
                    borderRadius: '12px',
                    bgcolor: `${value.color}15`,
                    flexShrink: 0
                  }}>
                    {value.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{value.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {value.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid 
            size={{ xs: 12, md: 7 }}
            data-aos="fade-left"
          >
            <Box sx={{
              bgcolor: 'rgba(4,107,210,0.03)',
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              border: '1px solid rgba(4,107,210,0.1)'
            }}>
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>Pilares de Formación</Typography>
              <Grid container spacing={3}>
                {pillars.map((pillar) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={pillar.title}>
                    <Box>
                      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                        <Box sx={{ color: 'primary.main', display: 'flex' }}>
                          {pillar.icon}
                        </Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                          {pillar.title}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.875rem' }}>
                        {pillar.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontStyle: 'italic',
                  lineHeight: 1.8,
                  borderLeft: '3px solid',
                  borderColor: 'primary.main',
                  pl: 2,
                }}
              >
                "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él."
                <br />
                <Box component="span" sx={{ fontWeight: 600, fontStyle: 'normal' }}>
                  — Proverbios 22:6
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}