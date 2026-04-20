import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LockIcon from '@mui/icons-material/Lock';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

const footerLinks = {
  'Institución': ['Nosotros', 'Misión y Visión', 'Metodología', 'Historia'],
  'Educación': ['Nivel Inicial', 'Nivel Primaria', 'Nivel Secundaria', 'Calendario Escolar'],
  'Admisión': ['Proceso de Admisión', 'Requisitos', 'Pensiones', 'SIANET'],
};

export default function Footer() {
  return (
    <>
      <Box
        id="contacto"
        sx={{
          bgcolor: 'background.default',
          py: { xs: 8, md: 12 },
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box
            data-aos="fade-up"
            sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.8rem' }}
            >
              Contáctenos
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Estamos para Ayudarte
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
              Comuníquese con nosotros para cualquier consulta sobre admisiones,
              pensiones o información general del colegio.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {/* Contact Info Column */}
            <Grid size={{ xs: 12, md: 4 }} data-aos="fade-right">
              <Stack spacing={2.5}>
                {[
                  { 
                    title: 'Correo Electrónico', 
                    value: 'informes@hosanna.edu.pe', 
                    icon: <EmailIcon />, 
                    color: '#1a3a8a',
                    href: 'mailto:informes@hosanna.edu.pe'
                  },
                  { 
                    title: 'WhatsApp', 
                    value: '+51 945 466 093', 
                    icon: <WhatsAppIcon />, 
                    color: '#25D366',
                    href: 'https://wa.me/51945466093'
                  }
                ].map((item, idx) => (
                  <Card 
                    key={idx} 
                    component="a"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    sx={{ 
                      textDecoration: 'none',
                      borderRadius: 4, 
                      boxShadow: '0 4px 20px rgba(0,0,0,0.04)', 
                      border: 'none',
                      transition: 'all 0.3s',
                      display: 'block',
                      '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', bgcolor: 'rgba(0,0,0,0.01)' }
                    }}
                  >
                    <CardContent sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        bgcolor: item.color, 
                        color: 'white', 
                        width: 44, 
                        height: 44, 
                        borderRadius: '12px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.disabled', textTransform: 'uppercase', display: 'block', mb: 0.2 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.main' }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}

                {/* Localización card with Map */}
                <Card sx={{ 
                  borderRadius: 4, 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)', 
                  border: 'none',
                  overflow: 'hidden'
                }}>
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#f57c00', 
                        color: 'white', 
                        width: 44, 
                        height: 44, 
                        borderRadius: '12px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <LocationOnIcon />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.disabled', textTransform: 'uppercase', display: 'block', mb: 0.2 }}>
                          Localización
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.main' }}>
                          Av. Centenario 1128, Pucallpa
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ height: 160, width: '100%', borderTop: '1px solid', borderColor: 'divider' }}>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.969853316!2d-74.5510651!3d-8.3846667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a3bc3d67f130df%3A0xc34a66a1a6ba2c90!2sAv.%20Centenario%201128%2C%20Pucallpa%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1713620000000!5m2!1ses!2spe" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </Box>
                  </CardContent>
                </Card>

                {/* Horario de Atención */}
                <Card sx={{ 
                  borderRadius: 4, 
                  bgcolor: '#1a3a8a', 
                  color: 'white', 
                  boxShadow: '0 10px 35px rgba(26,58,138,0.2)'
                }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                      <AccessTimeIcon sx={{ fontSize: 20, opacity: 0.9 }} />
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Horario de Atención</Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" sx={{ opacity: 0.8 }}>Lunes — Viernes</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>8:00 — 5:00 pm</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" sx={{ opacity: 0.8 }}>Sábados</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>8:00 — 1:00 pm</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" sx={{ opacity: 0.8 }}>Domingos</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: '#ff8a80' }}>Cerrado</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            {/* Form Column */}
            <Grid size={{ xs: 12, md: 8 }} data-aos="fade-left">
              <Card sx={{ 
                p: { xs: 3, md: 6 }, 
                borderRadius: 6, 
                boxShadow: '0 15px 50px rgba(0,0,0,0.06)',
                border: 'none',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 800, color: '#1a3a8a' }}>
                  Envíanos un mensaje
                </Typography>
                
                <Box 
                  component="form"
                  action="https://formspree.io/f/informes@hosanna.edu.pe"
                  method="POST"
                  sx={{ flexGrow: 1 }}
                >
                  <Stack spacing={4}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="body2" sx={{ mb: 1.5, fontWeight: 700, ml: 0.5, color: '#1a3a8a' }}>Nombre completo <Box component="span" sx={{ color: 'error.main' }}>*</Box></Typography>
                        <TextField
                          fullWidth
                          name="nombre"
                          placeholder="Juan García"
                          variant="outlined"
                          required
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.015)' } }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="body2" sx={{ mb: 1.5, fontWeight: 700, ml: 0.5, color: '#1a3a8a' }}>Correo electrónico <Box component="span" sx={{ color: 'error.main' }}>*</Box></Typography>
                        <TextField
                          fullWidth
                          name="email"
                          type="email"
                          placeholder="ejemplo@correo.com"
                          variant="outlined"
                          required
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.015)' } }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="body2" sx={{ mb: 1.5, fontWeight: 700, ml: 0.5, color: '#1a3a8a' }}>Teléfono / Celular <Box component="span" sx={{ color: 'error.main' }}>*</Box></Typography>
                        <TextField
                          fullWidth
                          name="telefono"
                          placeholder="+51 999 999 999"
                          variant="outlined"
                          required
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.015)' } }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="body2" sx={{ mb: 1.5, fontWeight: 700, ml: 0.5, color: '#1a3a8a' }}>Nivel de interés</Typography>
                        <TextField
                          fullWidth
                          select
                          name="nivel"
                          variant="outlined"
                          defaultValue=""
                          SelectProps={{ native: true }}
                          required
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.015)' } }}
                        >
                          <option value="">Seleccionar nivel...</option>
                          <option value="inicial">Nivel Inicial</option>
                          <option value="primaria">Nivel Primaria</option>
                          <option value="secundaria">Nivel Secundaria</option>
                        </TextField>
                      </Grid>
                    </Grid>

                    <Box>
                      <Typography variant="body2" sx={{ mb: 1.5, fontWeight: 700, ml: 0.5, color: '#1a3a8a' }}>Mensaje <Box component="span" sx={{ color: 'error.main' }}>*</Box></Typography>
                      <TextField
                        fullWidth
                        name="mensaje"
                        multiline
                        rows={5}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        variant="outlined"
                        required
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.015)' } }}
                      />
                    </Box>

                    <Stack 
                      direction={{ xs: 'column', lg: 'row' }} 
                      justifyContent="space-between" 
                      alignItems={{ xs: 'flex-start', lg: 'center' }} 
                      spacing={3}
                      sx={{ pt: 1 }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box sx={{ bgcolor: 'rgba(245,124,0,0.1)', p: 0.8, borderRadius: '50%', display: 'flex' }}>
                          <LockIcon sx={{ fontSize: 18, color: '#f57c00' }} />
                        </Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, maxWidth: 300, lineHeight: 1.4 }}>
                          Tu información es confidencial y no será compartida con terceros.
                        </Typography>
                      </Stack>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{ 
                          bgcolor: '#1a3a8a', 
                          px: 5, 
                          py: 2, 
                          borderRadius: 3,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          minWidth: 'fit-content',
                          boxShadow: '0 8px 25px rgba(26,58,138,0.3)',
                          '&:hover': { bgcolor: 'secondary.main', transform: 'translateY(-2px)', boxShadow: '0 12px 35px rgba(26,58,138,0.4)' },
                          transition: 'all 0.3s'
                        }}
                      >
                        Enviar mensaje
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'secondary.dark', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="/logo-hosanna.png"
                  sx={{
                    width: 42,
                    height: 'auto',
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))',
                  }}
                />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                  Colegio Hosanna
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                Institución educativa privada reconocida por el Ministerio de Educación del Perú.
                Formando líderes desde 1993.
              </Typography>
            </Grid>

            {Object.entries(footerLinks).map(([category, links]) => (
              <Grid size={{ xs: 6, md: 2.5 }} key={category}>
                <Typography
                  variant="overline"
                  sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.12em', display: 'block', mb: 1.5 }}
                >
                  {category}
                </Typography>
                <Stack spacing={0.75}>
                  {links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      underline="none"
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.85rem',
                        '&:hover': { color: 'white' },
                        transition: 'color 0.15s',
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 3 }} />

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', sm: 'center' }}
            spacing={2}
          >
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)' }}>
              © {new Date().getFullYear()} Colegio Privado Hosanna. Todos los derechos reservados.
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)' }}>
              Pucallpa, Perú · Reconocido por MINEDU
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
