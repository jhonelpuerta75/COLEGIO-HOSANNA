import { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface PlatformItem {
  id: string;
  name: string;
  description: string;
  link: string;
  logo: string;
  logoFallback: string;
}

const platforms: PlatformItem[] = [
  {
    id: 'sianet',
    name: 'SIANET',
    description: 'Sistema de Información Académica Web: notas, asistencias y seguimiento escolar.',
    link: 'https://www.sianet.pe/HosannaPucallpa/',
    logo: '/platforms/sianet.png',
    logoFallback: '/platforms/sianet.svg',
  },
  {
    id: 'edi-santillana',
    name: 'Edi Santillana',
    description: 'Plataforma integral de gestión del aprendizaje y contenidos didácticos de vanguardia.',
    link: 'https://edi.santillana.com.pe/',
    logo: '/platforms/santillana.png',
    logoFallback: '/platforms/edi-santillana.svg',
  },
  {
    id: 'pleno-internacional',
    name: 'Pleno Internacional',
    description: 'Evaluación continua y formativa del progreso y aprendizaje escolar.',
    link: 'https://edi.santillana.com.pe/',
    logo: '/platforms/logo_pleno_top.png',
    logoFallback: '/platforms/pleno.svg',
  },
  {
    id: 'tec-pro',
    name: 'TEC PRO',
    description: 'Enseñanza de robótica, programación y desarrollo de proyectos tecnológicos prácticos.',
    link: 'https://edi.santillana.com.pe/',
    logo: '/platforms/tec-pro.png',
    logoFallback: '/platforms/tec-pro.svg',
  },
  {
    id: 'richmond-studio',
    name: 'Richmond Studio',
    description: 'Plataforma de aprendizaje del idioma inglés con estándares internacionales.',
    link: 'https://edi.santillana.com.pe/',
    logo: '/platforms/richmond.png',
    logoFallback: '/platforms/richmond.svg',
  },
  {
    id: 'khan-academy',
    name: 'Khan Academy',
    description: 'Práctica personalizada y recursos interactivos de matemáticas y ciencias.',
    link: 'https://es.khanacademy.org/',
    logo: '/platforms/khan-academy.png',
    logoFallback: '/platforms/khan-academy.svg',
  },
  {
    id: 'beeverso',
    name: 'BeeVerso',
    description: 'Plataforma interactiva para potenciar el hábito y comprensión lectora.',
    link: 'https://auth.beeverso.org/login',
    logo: '/platforms/beeverso.png',
    logoFallback: '/platforms/beeverso.svg',
  },
  {
    id: 'canva-pro',
    name: 'Canva PRO Education',
    description: 'Herramientas de diseño gráfico, presentaciones y multimedia para estudiantes.',
    link: 'https://www.canva.com/education/',
    logo: '/platforms/canva.svg',
    logoFallback: '/platforms/canva.svg',
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    description: 'Correo institucional, herramientas de colaboración y almacenamiento en la nube.',
    link: 'https://workspace.google.com',
    logo: '/platforms/google-workspace.png',
    logoFallback: '/platforms/google-workspace.svg',
  },
];

export default function PlatformsRibbon() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  return (
    <Box
      component="section"
      aria-label="Cinta de plataformas educativas"
      sx={{
        bgcolor: '#ffffff',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'rgba(10, 31, 68, 0.08)',
        py: { xs: 2, md: 2.5 },
        position: 'relative',
        zIndex: 5,
        boxShadow: '0 4px 20px rgba(10, 31, 68, 0.04)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header de la cinta */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1.5,
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Chip
              label="Ecosistema Digital"
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: '0.72rem',
                bgcolor: 'rgba(4, 107, 210, 0.08)',
                color: 'primary.main',
                border: '1px solid rgba(4, 107, 210, 0.2)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                color: 'secondary.main',
                fontSize: { xs: '0.85rem', sm: '0.92rem' },
                display: { xs: 'none', sm: 'inline' },
              }}
            >
              Plataformas Educativas
            </Typography>
          </Box>

          {/* Controles de desplazamiento */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 'auto' }}>
            <IconButton
              size="small"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Desplazar plataformas a la izquierda"
              sx={{
                border: '1px solid',
                borderColor: canScrollLeft ? 'rgba(4, 107, 210, 0.25)' : 'rgba(0,0,0,0.08)',
                bgcolor: canScrollLeft ? 'rgba(4, 107, 210, 0.04)' : 'transparent',
                color: canScrollLeft ? 'primary.main' : 'text.disabled',
                p: 0.6,
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: '#ffffff',
                  borderColor: 'primary.main',
                },
              }}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Desplazar plataformas a la derecha"
              sx={{
                border: '1px solid',
                borderColor: canScrollRight ? 'rgba(4, 107, 210, 0.25)' : 'rgba(0,0,0,0.08)',
                bgcolor: canScrollRight ? 'rgba(4, 107, 210, 0.04)' : 'transparent',
                color: canScrollRight ? 'primary.main' : 'text.disabled',
                p: 0.6,
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: '#ffffff',
                  borderColor: 'primary.main',
                },
              }}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Cinta horizontal deslizable */}
        <Box
          ref={scrollContainerRef}
          onScroll={checkScroll}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1.5, sm: 2 },
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            py: 0.8,
            px: 0.5,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {platforms.map((platform) => (
            <Tooltip
              key={platform.id}
              title={
                <Box sx={{ p: 0.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {platform.name}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: 'rgba(255,255,255,0.85)', mt: 0.3 }}>
                    {platform.description}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: '#98E4F4', mt: 0.6, fontWeight: 700 }}>
                    Clic para ingresar ↗
                  </Typography>
                </Box>
              }
              arrow
              placement="top"
            >
              <Box
                component="a"
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  flex: '0 0 auto',
                  minWidth: { xs: 145, sm: 165, md: 175 },
                  height: { xs: 62, md: 68 },
                  px: 2,
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#ffffff',
                  border: '1.5px solid',
                  borderColor: 'rgba(10, 31, 68, 0.09)',
                  borderRadius: 3,
                  position: 'relative',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 2px 8px rgba(10, 31, 68, 0.03)',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: '#ffffff',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 24px rgba(4, 107, 210, 0.14)',
                    '& .platform-logo': {
                      transform: 'scale(1.06)',
                    },
                    '& .external-icon': {
                      opacity: 1,
                      color: 'primary.main',
                      transform: 'translate(1px, -1px)',
                    },
                  },
                }}
              >
                {/* Icono de enlace externo sutil */}
                <Box
                  className="external-icon"
                  sx={{
                    position: 'absolute',
                    top: 5,
                    right: 6,
                    display: 'flex',
                    alignItems: 'center',
                    opacity: 0.3,
                    color: 'text.secondary',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <OpenInNewIcon sx={{ fontSize: '0.72rem' }} />
                </Box>

                {/* Logotipo centrado */}
                <Box
                  sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    className="platform-logo"
                    src={platform.logo}
                    alt={platform.name}
                    loading="lazy"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.currentTarget;
                      if (platform.logoFallback && !target.src.endsWith(platform.logoFallback)) {
                        target.src = platform.logoFallback;
                      }
                    }}
                    sx={{
                      maxHeight: { xs: 34, md: 38 },
                      maxWidth: '86%',
                      height: 'auto',
                      width: 'auto',
                      objectFit: 'contain',
                      transition: 'transform 0.25s ease',
                    }}
                  />
                </Box>
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
