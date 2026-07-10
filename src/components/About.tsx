import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const stats = [
  { icon: <EmojiEventsIcon sx={{ fontSize: 32 }} />, value: '+34', label: 'Años formando líderes' },
  { icon: <FamilyRestroomIcon sx={{ fontSize: 32 }} />, value: '3', label: 'Niveles educativos' },
  { icon: <MenuBookIcon sx={{ fontSize: 32 }} />, value: '3', label: 'Resoluciones Directorales' },
  { icon: <HelpOutlineIcon sx={{ fontSize: 32 }} />, value: '100%', label: 'Comprometidos con la fe' },
];

export default function About() {
  return (
    <Box id="nosotros" sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          data-aos="fade-up"
          sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.8rem' }}
          >
            Quiénes Somos
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Sobre el Colegio Hosanna
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}
          >
            Una institución educativa privada con más de 34 años formando generaciones con excelencia académica
            y sólidos valores cristianos.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid
              size={{ xs: 6, md: 3 }}
              key={stat.label}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                }}
              >
                <CardContent sx={{ p: '0 !important' }}>
                  <Box sx={{ color: 'primary.main', mb: 1.5 }}>{stat.icon}</Box>
                  <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 700, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.4 }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={5} alignItems="stretch">
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-right"
          >
            <Card sx={{ height: '100%', p: { xs: 3, md: 4 } }}>
              <CardContent sx={{ p: '0 !important' }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '8px',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <VisibilityIcon sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Typography variant="h5">Visión</Typography>
                </Stack>
                <Divider sx={{ mb: 2.5 }} />
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                  Ser un referente de excelencia educativa cristiana, formando líderes íntegros que transformen la sociedad, guiados por principios bíblicos y una cosmovisión orientada al propósito de Dios.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-left"
          >
            <Card sx={{ height: '100%', p: { xs: 3, md: 4 } }}>
              <CardContent sx={{ p: '0 !important' }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '8px',
                      bgcolor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FlagIcon sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Typography variant="h5">Misión</Typography>
                </Stack>
                <Divider sx={{ mb: 2.5 }} />
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                  Brindar una formación integral que combina excelencia académica, innovación y pensamiento crítico, equipando a cada estudiante para desarrollar su máximo potencial como obra maestra de Dios.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
