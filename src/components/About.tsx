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
            <Card sx={{ height: '100%', p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: '0 !important', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
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
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 3 }}>
                  “Somos hechura de Dios, creados en Cristo Jesús para buenas obras”. (Efesios 2:10)
                  <br /><br />
                  Nuestro colegio hosanna, se formó hace 30 años con la visión de proporcionar una educación centrada en cristo, con la excelencia e innovación educativa, y formación integral para a gloria de Dios.
                </Typography>

                <Box
                  sx={{
                    mt: 'auto',
                    pt: 2.5,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: 200,
                      py: 3.5,
                      px: 2,
                      borderRadius: 3,
                      background: 'linear-gradient(180deg, rgba(4, 107, 210, 0.05) 0%, rgba(10, 31, 68, 0.02) 100%)',
                      border: '1px solid',
                      borderColor: 'rgba(4, 107, 210, 0.12)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.light',
                        boxShadow: '0 8px 24px rgba(4, 107, 210, 0.08)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/logo-hosanna.png"
                      alt="Insignia Colegio Hosanna"
                      sx={{
                        maxHeight: { xs: 130, sm: 150, md: 175 },
                        maxWidth: '85%',
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 22px rgba(4, 107, 210, 0.22))',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 2,
                        fontWeight: 700,
                        color: 'primary.main',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontSize: '0.72rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        bgcolor: 'rgba(4, 107, 210, 0.08)',
                        px: 2,
                        py: 0.5,
                        borderRadius: 10,
                      }}
                    >
                      Pucallpa, Perú • Desde 1992
                    </Typography>
                  </Box>
                </Box>
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
                <Stack spacing={2}>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, textAlign: 'justify' }}>
                    Colegio Hosanna se estableció para crear la próxima generación en la que una cosmovisión cristiana basada en Las Escrituras esté completamente presente. Frente al llamado de Dios, el colegio ayuda a los padres que quieren criar a sus hijos en base a la Palabra de Dios, reconociendo que creó Dios al hombre a su imagen y semejanza.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, textAlign: 'justify' }}>
                    El Plan de educación brindado en nuestro colegio se establece sobre la base de la verdad de que La Verdad es «Jesucristo» (Juan 14: 6 “Yo soy el camino, la verdad y la vida”), y se enseña a recrear (restaurar) y desarrollar una verdadera comprensión de Dios y los seres humanos, y el mundo, y su relación entre ellos.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, textAlign: 'justify' }}>
                    A través del estudio a cada tema, nuestros estudiantes comprenderán la voluntad y el camino de Dios para todas las áreas de la vida humana y serán formado con una mente y corazón que responda de una manera bíblica, teniendo una conciencia de los problemas del mundo y un anhelo por la verdad.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, textAlign: 'justify' }}>
                    Adoptando estrategias de aprendizaje efectivas y diversas que les permitan pensar de manera exploratoria, crítica y creativa en sus campos intelectuales, los estudiantes de Colegio Hosanna tendrán la oportunidad de equiparlos con las habilidades y la capacidad de responder como la obra maestra de Dios en el mundo como aquellos creados para el bien.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
