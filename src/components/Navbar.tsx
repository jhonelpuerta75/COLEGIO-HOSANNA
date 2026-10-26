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
import { useState, useEffect, useRef } from 'react';
import { admissionConfig } from '../config/admissionConfig';

const propuestaEducativaItems = [
  { label: 'Áreas de Desarrollo Específicas', href: '/propuesta-educativa/areas-de-desarrollo' },
  { label: 'Certificaciones', href: '/propuesta-educativa/areas-de-desarrollo#certificaciones' },
  { label: 'Ensamblaje Hosanna', href: '/propuesta-educativa/areas-de-desarrollo#ensamblaje-de-cuerdas' },
];

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
  {
    label: 'Propuesta Educativa',
    href: '/propuesta-educativa/areas-de-desarrollo',
    isPropuesta: true,
  },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Admisión', href: '/admision' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Niveles Dropdown State
  const [nivelesAnchorEl, setNivelesAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileNivelesOpen, setMobileNivelesOpen] = useState(false);
  const nivelesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Propuesta Educativa Dropdown State
  const [propuestaAnchorEl, setPropuestaAnchorEl] = useState<null | HTMLElement>(null);
  const [mobilePropuestaOpen, setMobilePropuestaOpen] = useState(false);
  const propuestaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Niveles handlers
  const handleNivelesOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (nivelesTimeoutRef.current) clearTimeout(nivelesTimeoutRef.current);
    setNivelesAnchorEl(event.currentTarget);
  };

  const handleNivelesClose = () => {
    nivelesTimeoutRef.current = setTimeout(() => {
      setNivelesAnchorEl(null);
    }, 250);
  };

  const handleNivelesMenuEnter = () => {
    if (nivelesTimeoutRef.current) clearTimeout(nivelesTimeoutRef.current);
  };

  // Propuesta Educativa handlers
  const handlePropuestaOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (propuestaTimeoutRef.current) clearTimeout(propuestaTimeoutRef.current);
    setPropuestaAnchorEl(event.currentTarget);
  };

  const handlePropuestaClose = () => {
    propuestaTimeoutRef.current = setTimeout(() => {
      setPropuestaAnchorEl(null);
    }, 250);
  };

  const handlePropuestaMenuEnter = () => {
    if (propuestaTimeoutRef.current) clearTimeout(propuestaTimeoutRef.current);
  };

  const handleCloseAll = () => {
    if (nivelesTimeoutRef.current) clearTimeout(nivelesTimeoutRef.current);
    if (propuestaTimeoutRef.current) clearTimeout(propuestaTimeoutRef.current);
    setNivelesAnchorEl(null);
    setPropuestaAnchorEl(null);
    setMobileOpen(false);
  };

  const handleLinkClick = (href: string) => {
    handleCloseAll();
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const isCurrentPage = path === '' || path === location.pathname || (path === '/' && location.pathname === '/');
      if (isCurrentPage) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
    } else if (href.startsWith('/#')) {
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

  const isPropuestaActive = location.pathname.startsWith('/propuesta-educativa');

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
                src="/logo-hosannaalterno.png"
                alt="Logo Colegio Hosanna"
                sx={{
                  width: 'auto',
                  height: { xs: 42, sm: 58 },
                  flexShrink: 0,
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                }}
              />

            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navLinks.slice(0, -1).map((link) => {
                // Niveles Dropdown
                if (link.label === 'Niveles' && link.children) {
                  return (
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
                        onClick={(e) => {
                          if (nivelesAnchorEl) {
                            handleCloseAll();
                          } else {
                            handleNivelesOpen(e);
                          }
                        }}
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
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
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
                            borderRadius: 2,
                          }
                        }}
                        MenuListProps={{
                          onMouseEnter: handleNivelesMenuEnter,
                          onMouseLeave: handleNivelesClose,
                          sx: { py: 1 }
                        }}
                      >
                        {link.children.map((child) => (
                          <MenuItem
                            key={child.label}
                            onClick={() => { handleCloseAll(); handleLinkClick(child.href); }}
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
                  );
                }

                // Propuesta Educativa Dropdown with Nested Submenu
                if (link.isPropuesta) {
                  return (
                    <Box
                      key={link.label}
                      onMouseEnter={handlePropuestaOpen}
                      onMouseLeave={handlePropuestaClose}
                    >
                      <Button
                        endIcon={<KeyboardArrowDownIcon sx={{
                          transition: 'transform 0.2s',
                          transform: propuestaAnchorEl ? 'rotate(180deg)' : 'none'
                        }} />}
                        onClick={(e) => {
                          if (propuestaAnchorEl) {
                            handleCloseAll();
                          } else {
                            handlePropuestaOpen(e);
                          }
                        }}
                        sx={{
                          color: isPropuestaActive ? 'primary.main' : 'text.primary',
                          bgcolor: isPropuestaActive ? 'rgba(4,107,210,0.08)' : 'transparent',
                          fontWeight: isPropuestaActive ? 700 : 500,
                          fontSize: '0.96rem',
                          px: 1.8,
                          '&:hover': { color: 'primary.main', bgcolor: 'rgba(4,107,210,0.08)' },
                        }}
                      >
                        {link.label}
                      </Button>

                      {/* Level 1 Menu for Propuesta Educativa */}
                      <Menu
                        anchorEl={propuestaAnchorEl}
                        open={Boolean(propuestaAnchorEl)}
                        onClose={handlePropuestaClose}
                        disableScrollLock
                        disableRestoreFocus
                        TransitionProps={{ timeout: 200 }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        sx={{
                          pointerEvents: 'none',
                          '& .MuiPaper-root': {
                            pointerEvents: 'auto',
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                            minWidth: 260,
                            borderRadius: 2,
                            overflow: 'visible',
                          }
                        }}
                        MenuListProps={{
                          onMouseEnter: handlePropuestaMenuEnter,
                          onMouseLeave: handlePropuestaClose,
                          sx: { py: 1 }
                        }}
                      >
                        {propuestaEducativaItems.map((item) => (
                          <MenuItem
                            key={item.label}
                            component={RouterLink}
                            to={item.href}
                            onClick={() => {
                              handleCloseAll();
                              handleLinkClick(item.href);
                            }}
                            sx={{
                              color: location.pathname === item.href ? 'primary.main' : 'text.primary',
                              fontWeight: location.pathname === item.href ? 700 : 500,
                              bgcolor: location.pathname === item.href ? 'rgba(4,107,210,0.08)' : 'transparent',
                              fontSize: '0.96rem',
                              py: 1.2,
                              px: 2.2,
                              '&:hover': { bgcolor: 'rgba(4,107,210,0.08)', color: 'primary.main' }
                            }}
                          >
                            {item.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                // Standard nav buttons (Inicio, Nosotros, Contacto)
                return (
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
                );
              })}

              <Button
                variant="contained"
                component={RouterLink}
                to="/admision"
                sx={{
                  ml: { md: 1, lg: 2 },
                  bgcolor: '#e7ebda',
                  color: '#0a1f44',
                  fontWeight: 800,
                  px: { md: 2, lg: 3 },
                  py: 1.1,
                  fontSize: { md: '0.9rem', lg: '0.96rem' },
                  whiteSpace: 'nowrap',
                  '&:hover': { bgcolor: '#d8dcc8' }
                }}
                startIcon={<AssignmentIcon />}
              >
                Admisión {admissionConfig.admissionYear}
              </Button>

              <Button
                component="a"
                href="https://www.sianet.pe/hosannapucallpa"
                target="_blank"
                rel="noopener noreferrer"
                title="Acceso SIANET Colegio Hosanna"
                aria-label="Acceso a SIANET"
                sx={{
                  ml: 1.5,
                  px: 1.8,
                  py: 0.8,
                  height: { md: 40, lg: 44 },
                  borderRadius: 2,
                  bgcolor: '#ffffff',
                  border: '1.5px solid #061f5c',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(6, 31, 92, 0.08)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: '#f4f7fc',
                    borderColor: '#0a3294',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 14px rgba(6, 31, 92, 0.16)',
                  },
                }}
              >
                <Box
                  component="img"
                  src="/sianet-button.png"
                  alt="SIANET"
                  sx={{
                    height: { md: 24, lg: 28 },
                    width: 'auto',
                    maxWidth: 120,
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Button>
            </Box>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 300, bgcolor: 'secondary.main' } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>Menú</Typography>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
        <List>
          {navLinks.map((link) => {
            // Mobile Niveles
            if (link.label === 'Niveles' && link.children) {
              return (
                <Box key={link.label}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setMobileNivelesOpen(!mobileNivelesOpen)}
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
                          component={RouterLink}
                          to={child.href}
                          onClick={() => {
                            setMobileOpen(false);
                            handleLinkClick(child.href);
                          }}
                          sx={{
                            pl: 4,
                            color: location.pathname === child.href ? '#64b5f6' : 'rgba(255,255,255,0.7)',
                            bgcolor: location.pathname === child.href ? 'rgba(255,255,255,0.1)' : 'transparent',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' }
                          }}
                        >
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            // Mobile Propuesta Educativa (Multi-level)
            if (link.isPropuesta) {
              return (
                <Box key={link.label}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setMobilePropuestaOpen(!mobilePropuestaOpen)}
                      sx={{
                        color: isPropuestaActive ? '#64b5f6' : 'rgba(255,255,255,0.85)',
                        bgcolor: isPropuestaActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' }
                      }}
                    >
                      <ListItemText primary={link.label} />
                      {mobilePropuestaOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={mobilePropuestaOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {propuestaEducativaItems.map((item) => (
                        <ListItemButton
                          key={item.label}
                          component={RouterLink}
                          to={item.href}
                          onClick={() => {
                            setMobileOpen(false);
                            handleLinkClick(item.href);
                          }}
                          sx={{
                            pl: 3.5,
                            color: location.pathname === item.href ? '#64b5f6' : 'rgba(255,255,255,0.7)',
                            bgcolor: location.pathname === item.href ? 'rgba(255,255,255,0.1)' : 'transparent',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' }
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{ fontSize: '0.88rem' }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            // Standard links
            return (
              <ListItem key={link.label} disablePadding>
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
            );
          })}
        </List>
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="https://www.sianet.pe/hosannapucallpa"
            target="_blank"
            rel="noopener noreferrer"
            title="Acceso SIANET Colegio Hosanna"
            aria-label="Acceso a SIANET"
            sx={{
              bgcolor: '#ffffff',
              borderColor: '#ffffff',
              py: 1,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: '#f4f7fc', borderColor: '#ffffff' }
            }}
          >
            <Box
              component="img"
              src="/sianet-button.png"
              alt="SIANET"
              sx={{ height: 28, width: 'auto', objectFit: 'contain' }}
            />
          </Button>

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
