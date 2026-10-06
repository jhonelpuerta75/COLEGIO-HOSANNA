import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, IconButton, Box, Button, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup immediately when page loads
    const timer = setTimeout(() => {
      setOpen(true);
    }, 400);

    return () => clearTimeout(timer);
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
      keepMounted
      onClose={handleClose}
      aria-labelledby="admission-popup-title"
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          overflow: 'hidden',
          bgcolor: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          m: 2,
          maxHeight: '92vh',
        },
      }}
      SlotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(10, 25, 47, 0.75)',
            backdropFilter: 'blur(8px)',
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
          right: 14,
          top: 14,
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
          bgcolor: '#ffffff',
        }}
      >
        {/* Flyer Image Container */}
        <Box
          sx={{
            width: '100%',
            maxHeight: '72vh',
            overflowY: 'auto',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: '#0c1e38',
            position: 'relative',
            // Custom scrollbar
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: '3px',
            },
          }}
        >
          <img
            src="/admision-2027.png"
            alt="Admisión 2027 Colegio Privado Hosanna"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '75vh',
              objectFit: 'contain',
              display: 'block',
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
              '&:hover': {
                bgcolor: '#1da851',
                transform: 'translateY(-1px)',
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
