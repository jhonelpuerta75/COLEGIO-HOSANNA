import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, IconButton, Box, Button, Fade } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Fade ref={ref} {...props} timeout={{ enter: 400, exit: 250 }} />;
});

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Precargar la imagen correspondiente antes de abrir el popup para evitar tirones
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
    const targetSrc = isMobile ? '/admision-2027.png' : '/admision-2027-web.png';

    const img = new Image();
    img.src = targetSrc;
    const preloadPromise = img.decode ? img.decode() : new Promise((resolve) => { img.onload = resolve; });

    // Dar 1.2s para que la página principal, Hero y AOS terminen de cargar completamente
    const timer = setTimeout(() => {
      preloadPromise
        .catch(() => { })
        .finally(() => {
          if (isMounted) {
            setOpen(true);
          }
        });
    }, 1200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/51945466093?text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Admisi%C3%B3n%202027%20del%20Colegio%20Hosanna',
      '_blank'
    );
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="admission-popup-title"
      maxWidth={false}
      PaperProps={{
        sx: {
          borderRadius: '24px',
          overflow: 'hidden',
          bgcolor: '#0a192f',
          boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 0 50px rgba(4, 107, 210, 0.35)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          position: 'relative',
          m: { xs: 1.5, sm: 2 },
          width: 'fit-content',
          maxWidth: { xs: '92vw', sm: '88vw', md: '750px' },
          maxHeight: '94vh',
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform, opacity',
          animation: 'smoothBounceIn 0.5s cubic-bezier(0.34, 1.45, 0.64, 1) 0.22s both',
          '@keyframes smoothBounceIn': {
            '0%': {
              opacity: 0,
              transform: 'scale3d(0.7, 0.7, 1)',
            },
            '70%': {
              opacity: 1,
              transform: 'scale3d(1.03, 1.03, 1)',
            },
            '100%': {
              opacity: 1,
              transform: 'scale3d(1, 1, 1)',
            },
          },
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(10, 25, 47, 0.84)',
            backdropFilter: 'blur(6px)',
            transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease',
          },
        },
      }}
    >
      {/* Top Floating Close Button */}
      <IconButton
        aria-label="cerrar"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 12,
          top: 12,
          zIndex: 20,
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(6px)',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: '#dc2626',
            borderColor: '#ef4444',
            transform: 'scale(1.15) rotate(90deg)',
          },
        }}
      >
        <CloseIcon fontSize="medium" />
      </IconButton>

      <DialogContent
        sx={{
          p: 0,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#0a192f',
          width: '100%',
        }}
      >
        {/* Flyer Image Container */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            lineHeight: 0,
          }}
        >
          {/* Mobile Flyer (Vertical) */}
          <Box
            component="img"
            src="/banner-web-hs.jpeg"
            alt="Admisión 2027 Colegio Privado Hosanna"
            loading="eager"
            decoding="async"
            sx={{
              display: { xs: 'block', sm: 'none' },
              width: 'auto',
              height: 'auto',
              maxWidth: '92vw',
              maxHeight: '74vh',
            }}
          />

          {/* Web / Desktop Flyer (Wider) */}
          <Box
            component="img"
            src="/banner-web-hs.jpeg"
            alt="Admisión 2027 Colegio Privado Hosanna"
            loading="eager"
            decoding="async"
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: 'auto',
              height: 'auto',
              maxWidth: { sm: '85vw', md: '700px' },
              maxHeight: '74vh',
            }}
          />
        </Box>

        {/* Footer Actions */}
        <Box
          sx={{
            width: '100%',
            p: 2,
            bgcolor: '#0a192f',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1.5,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Button
            variant="contained"
            fullWidth
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            sx={{
              py: 1.2,
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.95rem',
              textTransform: 'none',
              bgcolor: '#25D366',
              color: '#ffffff',
              boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.4)',
              animation: 'buttonBounce 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.58s 1 both',
              '@keyframes buttonBounce': {
                '0%': {
                  transform: 'scale3d(1, 1, 1)',
                },
                '35%': {
                  transform: 'scale3d(1.1, 1.1, 1) translateY(-4px)',
                  boxShadow: '0 8px 24px 0 rgba(37, 211, 102, 0.65)',
                },
                '65%': {
                  transform: 'scale3d(0.96, 0.96, 1) translateY(1px)',
                },
                '85%': {
                  transform: 'scale3d(1.02, 1.02, 1) translateY(-1px)',
                },
                '100%': {
                  transform: 'scale3d(1, 1, 1) translateY(0)',
                  boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.4)',
                },
              },
              '&:hover': {
                bgcolor: '#1da851',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px 0 rgba(37, 211, 102, 0.5)',
              },
            }}
          >
            Más Información
          </Button>

          <Button
            variant="outlined"
            onClick={handleClose}
            fullWidth
            sx={{
              py: 1.2,
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '0.95rem',
              textTransform: 'none',
              color: '#e2e8f0',
              borderColor: 'rgba(255,255,255,0.25)',
              '&:hover': {
                borderColor: '#ffffff',
                color: '#ffffff',
                bgcolor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Cerrar
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
