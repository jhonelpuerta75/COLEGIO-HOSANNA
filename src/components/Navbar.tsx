import AppBar from '@mui/material/AppBar';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { admissionConfig } from '../config/admissionConfig';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  {
    label: 'Niveles',
    href: '/#niveles',
    children: [
      { label: 'Inicial', href: '/inicial' },
      { label: 'Primaria', href: '/primaria' },
      { label: 'Secundaria', href: '/secundaria' },
    ]
  },
  { label: 'Metodología', href: '/metodologia' },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Admisión', href: '/admision' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [nivelesAnchorEl, setNivelesAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileNivelesOpen, setMobileNivelesOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const [nivelesTimeout, setNivelesTimeout] = useState<any | null>(null);

  const handleNivelesOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (nivelesTimeout) clearTimeout(nivelesTimeout);
    setNivelesAnchorEl(event.currentTarget);
  };

  const handleNivelesClose = () => {
    const timeout = setTimeout(() => {
      setNivelesAnchorEl(null);
    }, 300); // More generous delay for stability
    setNivelesTimeout(timeout);
  };

  const handleMenuEnter = () => {
    if (nivelesTimeout) clearTimeout(nivelesTimeout);
  };

  const toggleMobileNiveles = () => {
    setMobileNivelesOpen(!mobileNivelesOpen);
  };

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'white',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          boxShadow: trigger ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 1201,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: { xs: 1.5, sm: 2.2 }, px: { xs: 0 }, overflow: 'hidden' }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 }, flexGrow: 1, textDecoration: 'none', minWidth: 0 }}
            >
              <Box
                component="img"
                src="/logo-hosanna.png"
                sx={{
                  width: 'auto',
                  height: { xs: 42, sm: 58 },
                  flexShrink: 0,
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                }}
              />
              <Box sx={{ display: 'block' }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    fontSize: { xs: '1rem', sm: '1.3rem' },
                  }}
                >
                  Colegio Hosanna
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: { xs: '0.68rem', sm: '0.78rem' }, 
                    letterSpacing: '0.08em',
                    display: 'block'
                  }}
                >
                  PUCALLPA, PERÚ
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navLinks.slice(0, -1).map((link) => (
                link.children ? (
                  <Box
                    key={link.label}
                    onMouseEnter={handleNivelesOpen}
                    onMouseLeave={handleNivelesClose}
                  >
                    <Button
                      endIcon={<KeyboardArrowDownIcon sx={{
                        transition: 'transform 0.2s',
                        transform: nivelesAnchorEl ? 'rotate(180deg)' : 'none'
                      }} />}
                      sx={{
                        color: 'text.primary',
                        fontSize: '0.96rem',
                        px: 1.8,
                        '&:hover': { color: 'primary.main', bgcolor: 'rgba(4,107,210,0.08)' },
                      }}
                    >
                      {link.label}
                    </Button>
                    <Menu
                      anchorEl={nivelesAnchorEl}
                      open={Boolean(nivelesAnchorEl)}
                      onClose={handleNivelesClose}
                      disableScrollLock
                      disableRestoreFocus
                      TransitionProps={{ timeout: 200 }}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      sx={{
                        pointerEvents: 'none',
                        '& .MuiPaper-root': {
                          pointerEvents: 'auto',
                          bgcolor: 'background.paper',
                          color: 'text.primary',
                          border: '1px solid',
                          borderColor: 'divider',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                          minWidth: 180,
                        }
                      }}
                      MenuListProps={{
                        onMouseEnter: handleMenuEnter,
                        onMouseLeave: handleNivelesClose,
                        sx: { py: 1 }
                      }}
                    >
                      {link.children.map((child) => (
                        <MenuItem
                          key={child.label}
                          onClick={() => { handleNivelesClose(); handleLinkClick(child.href); }}
                          component={RouterLink}
                          to={child.href}
                          sx={{
                            color: 'text.primary',
                            fontSize: '0.96rem',
                            py: 1.2,
                            px: 2.2,
                            '&:hover': { bgcolor: 'rgba(4,107,210,0.08)', color: 'primary.main' }
                          }}
                        >
                          {child.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={link.label}
                    component={RouterLink}
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    sx={{
                      color: location.pathname === link.href ? 'primary.main' : 'text.primary',
                      fontSize: '0.96rem',
                      px: 1.8,
                      '&:hover': { color: 'primary.main', bgcolor: 'rgba(4,107,210,0.08)' },
                      bgcolor: location.pathname === link.href ? 'rgba(4,107,210,0.08)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Button>
                )
              ))}
              <Button
                variant="contained"
                component={RouterLink}
                to="/admision"
                sx={{ 
                  ml: 2, 
                  bgcolor: 'primary.main', 
                  fontWeight: 800,
                  px: 3.5,
                  py: 1.2,
                  fontSize: '0.96rem',
                  '&:hover': { bgcolor: 'primary.dark' } 
                }}
                startIcon={<AssignmentIcon />}
              >
                Admisión {admissionConfig.admissionYear}
              </Button>
            </Box>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: 'secondary.main' } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>Menú</Typography>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
        <List>
          {navLinks.map((link) => (
            <Box key={link.label}>
              {link.children ? (
                <>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleMobileNiveles}
                      sx={{ color: 'rgba(255,255,255,0.85)', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
                    >
                      <ListItemText primary={link.label} />
                      {mobileNivelesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={mobileNivelesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {link.children.map((child) => (
                        <ListItemButton
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          sx={{
                            pl: 4,
                            color: 'rgba(255,255,255,0.7)',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' }
                          }}
                        >
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem disablePadding>
                  <ListItemButton
                    component={RouterLink}
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    sx={{
                      color: location.pathname === link.href ? 'white' : 'rgba(255,255,255,0.85)',
                      bgcolor: location.pathname === link.href ? 'rgba(255,255,255,0.1)' : 'transparent',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' }
                    }}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              )}
            </Box>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            fullWidth
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            startIcon={<EmailIcon />}
          >
            Contáctanos
          </Button>
        </Box>
      </Drawer>

      <Toolbar sx={{ py: { xs: 1.5, sm: 2.2 } }} />
    </>
  );
}
