import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import SchoolIcon from '@mui/icons-material/School';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AppsIcon from '@mui/icons-material/Apps';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PaletteIcon from '@mui/icons-material/Palette';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Groups3Icon from '@mui/icons-material/Groups3';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedIcon from '@mui/icons-material/Verified';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import PublicIcon from '@mui/icons-material/Public';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChurchIcon from '@mui/icons-material/Church';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CreateIcon from '@mui/icons-material/Create';

export default function EducationalProposalPage() {
  const [selectedAcademicIndex, setSelectedAcademicIndex] = useState(0);

  const academicAreas = [
    {
      title: 'Inglés',
      badge: 'Bilingüismo & Estándares MCER',
      icon: <LanguageIcon sx={{ fontSize: 26 }} />,
      color: '#0288d1',
      description: 'Enseñanza del idioma inglés orientada al desarrollo fluido de las cuatro destrezas: comprensión auditiva, expresión oral, lectura comprensiva y producción escrita. Apoyados en Richmond Learning Platform y una preparación progresiva alineada al Marco Común Europeo (MCER).',
      sections: [
        {
          heading: 'Enfoque Comunicativo y Destrezas Lingüísticas:',
          items: [
            'Comprensión auditiva (Listening) y expresión oral fluida (Speaking) en contextos reales e interactivos.',
            'Comprensión de lectura analítica (Reading) y producción de textos escritos estructurados (Writing).',
            'Enfoque comunicativo funcional que promueve la inmersión lingüística y la autoconfianza al comunicarse.'
          ]
        },
        {
          heading: 'Plataforma y Recursos de Aprendizaje:',
          items: [
            'Richmond Learning Platform: acceso a Richmond Studio, audios interactivos y lecturas graduadas.',
            'Materiales didácticos estructurados bajo los descriptores del Marco Común Europeo de Referencia (MCER).'
          ]
        },
        {
          heading: 'Metas y Bilingüismo Progresivo:',
          items: [
            'Preparación continua orientada a estándares y evaluaciones internacionales de suficiencia.',
            'Consolidación progresiva de competencias bilingües en Inicial, Primaria y Secundaria.'
          ]
        }
      ],
      tags: ['Richmond Studio', 'Enfoque Comunicativo', 'Estándares MCER', 'Bilingüismo Activo', 'Reading & Writing']
    },
    {
      title: 'Ciencia y Tecnología',
      badge: 'Indagación Científica & Experimentación',
      icon: <ScienceIcon sx={{ fontSize: 26 }} />,
      color: '#00897b',
      description: 'Promovemos el método científico, la experimentación vivencial en laboratorio y la formulación de hipótesis. Desarrollamos mentalidad investigadora y conciencia de mayordomía ambiental de la creación.',
      sections: [
        {
          heading: 'Metodología de Indagación Científica:',
          items: [
            'Aplicación rigurosa del método científico: observación, planteamiento de hipótesis, experimentación y análisis.',
            'Talleres prácticos de laboratorio escolar con registro de datos empíricos y normas de bioseguridad.',
            'Formulación de conclusiones basadas en evidencias y sustentación oral de proyectos.'
          ]
        },
        {
          heading: 'Disciplinas Curriculares Integradas:',
          items: [
            'Biología y Ecología: estudio de los seres vivos, biodiversidad del Perú y cuidado del cuerpo humano.',
            'Física y Química: comprensión de las leyes de la materia, transformaciones energéticas y el universo.',
            'Soluciones Tecnológicas: diseño de prototipos escolares que resuelven problemas del entorno.'
          ]
        },
        {
          heading: 'Mayordomía Ambiental y Sostenibilidad:',
          items: [
            'Formación ética en el cuidado responsable de la creación divina y preservación de recursos naturales.',
            'Iniciativas de reciclaje, conservación del agua y proyectos de eco-eficiencia escolar.'
          ]
        }
      ],
      tags: ['Método Científico', 'Indagación Científica', 'Laboratorio Experimental', 'Cuidado Ambiental', 'Soluciones Tecnológicas']
    },
    {
      title: 'Matemática',
      badge: 'Lógica & Resolución de Problemas',
      icon: <CalculateIcon sx={{ fontSize: 26 }} />,
      color: '#d81b60',
      description: 'Desarrollo del razonamiento lógico-matemático, análisis cuantitativo y modelación geométrica. Con el soporte de Khan Academy y el enfoque Singapur, transitamos desde el material concreto hacia la abstracción para resolver problemas reales con agilidad.',
      sections: [
        {
          heading: 'Enfoque Concreto - Pictórico - Abstracto (Método Singapur):',
          items: [
            'Fase Concreta: exploración y manipulación de material didáctico para afianzar conceptos numéricos y espaciales.',
            'Fase Pictórica: modelado visual mediante diagramas de barras, esquemas y representaciones gráficas.',
            'Fase Abstracta: consolidación de operaciones, algoritmos matemáticos y pensamiento algebraico con sentido.'
          ]
        },
        {
          heading: 'Ejes y Competencias Curriculares:',
          items: [
            'Aritmética y Álgebra: operaciones fundamentales, ecuaciones, proporcionalidad y patrones.',
            'Geometría y Medición: análisis espacial, propiedades de figuras y cuerpos geométricos.',
            'Estadística y Probabilidad: interpretación crítica de tablas, gráficos y toma de decisiones fundamentadas.'
          ]
        },
        {
          heading: 'Plataformas de Refuerzo y Gamificación:',
          items: [
            'Khan Academy: aprendizaje personalizado con misiones a su propio ritmo y dominio de temas.',
            'Desafíos de lógica y resolución heurística para estimular la destreza y perseverancia matemática.'
          ]
        }
      ],
      tags: ['Khan Academy', 'Método Singapur', 'Razonamiento Lógico', 'Resolución de Problemas', 'Modelado Geométrico']
    },
    {
      title: 'Ciencias Sociales',
      badge: 'Ciudadanía & Historia',
      icon: <PublicIcon sx={{ fontSize: 26 }} />,
      color: '#f57c00',
      description: 'Comprensión del devenir histórico peruano y mundial, la geografía y la educación cívico-económica. Formamos ciudadanos con identidad nacional, pensamiento crítico, valores democráticos y compromiso ético con el bienestar social.',
      sections: [
        {
          heading: 'Construcción de Interpretaciones Históricas:',
          items: [
            'Estudio reflexivo y cronológico de los procesos históricos del Perú y la historia universal.',
            'Contraste de diversas fuentes de información histórica para desarrollar criterio analítico y multicausal.',
            'Revaloración del patrimonio cultural peruano y afirmación de la identidad nacional.'
          ]
        },
        {
          heading: 'Gestión Responsable del Espacio y Ambiente:',
          items: [
            'Comprensión del territorio peruano, ecosistemas, cuencas hidrográficas y dinámicas sociales.',
            'Cultura de prevención de riesgos de desastres y conciencia sobre el impacto del cambio climático.'
          ]
        },
        {
          heading: 'Educación Ciudadana y Financiera:',
          items: [
            'Vivencia de valores cívicos, derechos humanos, deberes democráticos y convivencia armónica.',
            'Educación económica escolar: conceptos de presupuesto familiar, ahorro, consumo responsable y mercado.'
          ]
        }
      ],
      tags: ['Identidad Peruana', 'Pensamiento Histórico', 'Educación Ciudadana', 'Geografía & Economía', 'Educación Financiera']
    },
    {
      title: 'Comunicación',
      badge: 'Comprensión Lectora & Oratoria',
      icon: <MenuBookIcon sx={{ fontSize: 26 }} />,
      color: '#7b1fa2',
      description: 'Fortalecimiento de la comprensión lectora analítica y crítica, redacción de textos argumentativos y oratoria persuasiva. Mediante plataformas como BeeVerso y Pleno Santillana, cultivamos el hábito lector, la ortografía impecable y la comunicación asertiva.',
      sections: [
        {
          heading: 'Niveles de Comprensión Lectora:',
          items: [
            'Nivel Literal: identificación ágil de ideas principales, detalles explícitos y estructura textual.',
            'Nivel Inferencial: deducción de intenciones del autor, relaciones de causa-efecto y mensajes implícitos.',
            'Nivel Crítico-Valorativo: formulación de juicios razonados, análisis ético y debate fundamentado.'
          ]
        },
        {
          heading: 'Producción de Textos Escritos:',
          items: [
            'Planificación, redacción, revisión y edición de textos narrativos, descriptivos y argumentativos.',
            'Aplicación rigurosa de normas ortográficas, gramaticales, coherencia, cohesión y riqueza de vocabulario.'
          ]
        },
        {
          heading: 'Oratoria y Entornos Digitales:',
          items: [
            'Técnicas de expresión oral, modulación de la voz, postura escénica y argumentación convincente.',
            'Plataformas BeeVerso y Pleno Santillana para el fomento de la lectura interactiva y evaluación continua.'
          ]
        }
      ],
      tags: ['BeeVerso', 'Pleno Santillana', 'Comprensión Lectora', 'Redacción & Oratoria', 'Pensamiento Crítico']
    }
  ];

  const sportsCarouselRef = useRef<HTMLDivElement>(null);

  const scrollSportsCarousel = (direction: 'left' | 'right') => {
    if (sportsCarouselRef.current) {
      const cardWidth = 300;
      const scrollAmount = cardWidth + 16;
      sportsCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const sportsPhotos = [
    {
      id: 1,
      image: '/hs-photos/gras-natural.jpeg',
      title: 'Canchas de Grass Natural y Loza',
      badge: 'Infraestructura',
      description: 'Espacios reglamentarios acondicionados para fútbol, futsal y vóley.'
    },
    {
      id: 2,
      image: '/hs-photos/piscina.jpeg',
      title: 'Piscinas para Natación',
      badge: 'Natación Formativa',
      description: 'Instalaciones acuáticas seguras para la estimulación y desarrollo físico.'
    },
    {
      id: 3,
      image: '/hs-photos/Cancha_techada.jpg',
      title: 'Mini Olimpiadas Hosanna',
      badge: 'Competencia Escolar',
      description: 'Encuentros deportivos interaulas programados a lo largo del año.'
    },
    {
      id: 4,
      image: '/hs-photos/campeonato-padres.jpeg',
      title: 'Campeonatos de Padres de Familia',
      badge: 'Integración Familiar',
      description: 'Torneos de confraternidad por el Día del Padre y de la Madre.'
    },
    {
      id: 5,
      image: '/hs-photos/ginkana.jpeg',
      title: 'Juegos de Gimkana',
      badge: 'Padres y Alumnos',
      description: 'Jornadas recreativas fortaleciendo el espíritu deportivo y la unión.'
    }
  ];

  const platforms = [
    {
      name: 'Google Workspace for Education',
      badge: '@hosanna.edu.pe',
      description: 'Todos nuestros alumnos cuentan con correo institucional con el dominio @hosanna.edu.pe para acceder a herramientas de colaboración en la nube.',
      link: 'https://workspace.google.com',
      logoPng: '/platforms/google-workspace.png',
      logoSvg: '/platforms/google-workspace.svg',
    },
    {
      name: 'Classroom',
      badge: 'Aula Virtual',
      description: 'Mantenemos la plataforma en caso de pasar a modo virtual de inmediato, en caso de ser necesario.',
      link: 'https://classroom.google.com/',
      logoPng: '/platforms/classroom.png',
      logoSvg: '/platforms/classroom.svg',
    },
    {
      name: 'Edi Santillana',
      badge: 'Compartir Aprendizajes',
      description: 'Compartir Aprendizajes: Plataforma integral de gestión del aprendizaje y contenidos didácticos de vanguardia.',
      link: 'https://edi.santillana.com.pe/',
      logoPng: '/platforms/santillana.png',
      logoSvg: '/platforms/santillana.svg',
    },
    {
      name: 'Pleno Internacional',
      badge: 'Evaluación de Progreso',
      description: 'Evaluación de tu progreso con Edi Santillana, permitiendo monitoreo continuo y formativo del avance escolar.',
      link: 'https://edi.santillana.com.pe/',
      logoPng: '/platforms/pleno.png',
      logoSvg: '/platforms/pleno.svg',
    },
    {
      name: 'Richmond Studio y Richmond Learning Platform',
      badge: 'Idioma Inglés',
      description: 'Aprendizaje del Idioma Inglés con metodologías modernas, práctica interactiva y estándares internacionales.',
      link: 'https://edi.santillana.com.pe/',
      logoPng: '/platforms/richmond.png',
      logoSvg: '/platforms/richmond.svg',
    },
    {
      name: 'TEC PRO',
      badge: 'Robótica & STEAM',
      description: 'Plataforma para la enseñanza de ROBÓTICA, pensamiento computacional y proyectos tecnológicos prácticos.',
      link: 'https://edi.santillana.com.pe/', //podriamos quitar el boton si es que no se usa
      logoPng: '/platforms/tec-pro.png',
      logoSvg: '/platforms/tec-pro.svg',
    },
    {
      name: 'Khan Academy',
      badge: 'Matemática & Ciencias',
      description: 'Plataforma web para aprender matemáticas, cálculo y ciencias con ejercicios prácticos y evaluaciones personalizadas.',
      link: 'https://es.khanacademy.org/',
      logoPng: '/platforms/khan-academy.png',
      logoSvg: '/platforms/khan-academy.svg',
    },
    {
      name: 'BeeVerso',
      badge: 'Comprensión Lectora',
      description: 'Plataforma para impulsar la comprensión lectora de nuestros estudiantes con lecturas interactivas y dinámicas.',
      link: 'https://auth.beeverso.org/login',
      logoPng: '/platforms/beeverso.png',
      logoSvg: '/platforms/beeverso.svg',
    },
    {
      name: 'Canva PRO Education',
      badge: 'Edición Multimedia',
      description: 'Plataforma líder en edición multimedia en versión PRO para todos nuestros estudiantes.',
      link: 'https://www.canva.com/education/',
      logoPng: '/platforms/canva.png',
      logoSvg: '/platforms/canva.svg',
    },
    {
      name: 'SIANET',
      badge: 'Gestión Académica',
      description: 'Sistema de Información Académica Web para el seguimiento detallado de notas, asistencias y avance del estudiante.',
      link: 'https://www.sianet.pe/HosannaPucallpa/',
      logoPng: '/platforms/sianet.png',
      logoSvg: '/platforms/sianet.svg',
    },
  ];

  const cdlCategories = [
    {
      name: 'Música',
      icon: <MusicNoteIcon sx={{ fontSize: 28 }} />,
      color: '#e91e63',
      description: 'Expresión espiritual y técnica a través de diversos instrumentos.',
      items: ['Piano', 'Batería', 'Coro']
    },
    {
      name: 'Artes y Cultura',
      icon: <PaletteIcon sx={{ fontSize: 28 }} />,
      color: '#f57c00',
      description: 'Potenciamos la creatividad y la sensibilidad artística de cada alumno.',
      items: ['Danza', 'Dibujo y Pintura', 'Gastronomía']
    },
    {
      name: 'Deportes y Salud',
      icon: <SportsBasketballIcon sx={{ fontSize: 28 }} />,
      color: '#8bc34a',
      description: 'Fomentamos la disciplina y el trabajo en equipo mediante la actividad física.',
      items: ['Natación', 'Basquetbol', 'Futsal']
    },
    {
      name: 'Pensamiento y Ciencia',
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 28 }} />,
      color: '#00bcd4',
      description: 'Desarrollo de habilidades lógicas, tecnológicas y comunicativas.',
      items: ['Ajedrez']
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'secondary.main',
          color: 'white',
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          backgroundImage: 'url(/hs-photos/educationalProposal.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          // Capa base para asegurar contraste constante con el texto blanco
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(10, 31, 68, 0.62), rgba(10, 31, 68, 0.58))',
            zIndex: 1,
            pointerEvents: 'none',
          },
          // Capa adicional de oscurecimiento que se disuelve en hover para aclarar el fondo
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(10, 31, 68, 0.26), rgba(10, 31, 68, 0.28))',
            opacity: 1,
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,
            pointerEvents: 'none',
          },
          '&:hover::after': {
            opacity: 0,
          },
          '& > *': {
            position: 'relative',
            zIndex: 2,
          }
        }}
      >
        <Container maxWidth="md" data-aos="fade-up">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: '0.2em',
              fontWeight: 700,
              opacity: 0.9,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}
          >
            Propuesta Educativa
          </Typography>
          <Typography
            variant="h1"
            sx={{
              mt: 2,
              mb: 3,
              fontSize: { xs: '2.8rem', md: '4.2rem' },
              textShadow: '0 4px 24px rgba(0, 0, 0, 0.6)'
            }}
          >
            Áreas de Desarrollo Específicas
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              opacity: 0.95,
              lineHeight: 1.6,
              maxWidth: 800,
              mx: 'auto',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.5)'
            }}
          >
            Un enfoque formativo integral que combina excelencia académica, desarrollo en valores cristianos, disciplinas deportivas y talleres curriculares prácticos.
          </Typography>
        </Container>
      </Box>

      {/* Quick Stats Bar */}
      <Box sx={{ bgcolor: 'white', position: 'relative', zIndex: 2, mt: -5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ boxShadow: '0 15px 45px rgba(0,0,0,0.1)', borderRadius: 4, overflow: 'hidden' }}>
            {[
              { label: 'Educación Híbrida', value: '100%', icon: <DevicesIcon />, color: '#046bd2' },
              { label: 'Extracurriculares', value: 'TALLERES', icon: <AutoAwesomeIcon />, color: '#e91e63' },
              { label: 'Excelencia Académica', value: 'TOP', icon: <WorkspacePremiumIcon />, color: '#fbc02d' },
              { label: 'Formación Integral', value: '100%', icon: <PsychologyIcon />, color: '#8bc34a' }
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, md: 3 }} key={idx}>
                <Box sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'white',
                  borderRight: idx < 3 ? { md: '1px solid #eee' } : 'none',
                  borderBottom: { xs: idx < 2 ? '1px solid #eee' : 'none', md: 'none' }
                }}>
                  <Box sx={{ color: stat.color, mb: 1.5, display: 'flex', justifyContent: 'center' }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main' }}>{stat.value}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Barra de Navegación Rápida por Secciones */}
      <Box
        sx={{
          bgcolor: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'sticky',
          top: { xs: 56, sm: 64, md: 70 },
          zIndex: 1100,
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          py: 1.5,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={1}
            sx={{
              overflowX: 'auto',
              py: 0.5,
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              justifyContent: { xs: 'flex-start', md: 'center' },
              alignItems: 'center'
            }}
          >
            {[
              { label: 'Programa Pedagógico', href: '#academica' },
              { label: 'Áreas Académicas', href: '#areas-academicas' },
              { label: 'Formativa', href: '#formativa' },
              { label: 'Deportiva', href: '#deportiva' },
              { label: 'Talleres Curriculares', href: '#talleres-curriculares' },
              { label: 'Certificaciones', href: '#certificaciones' },
              { label: 'Ensamblaje de Cuerdas', href: '#ensamblaje-de-cuerdas' },
            ].map((section) => (
              <Chip
                key={section.label}
                label={section.label}
                component="a"
                href={section.href}
                clickable
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(section.href.substring(1));
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', section.href);
                  }
                }}
                sx={{
                  fontWeight: 600,
                  fontSize: '0.84rem',
                  py: 1.8,
                  px: 0.8,
                  bgcolor: 'rgba(4, 107, 210, 0.05)',
                  color: 'secondary.main',
                  border: '1px solid',
                  borderColor: 'rgba(4, 107, 210, 0.12)',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderColor: 'primary.main',
                  }
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Programa Pedagógico */}
      <Container id="academica" maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: { xs: '120px', md: '140px' } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <SchoolIcon color="primary" />
                <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main' }}>Programa Pedagógico</Typography>
              </Box>
              <Typography variant="h2">Formación Integral y Excelencia</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Nuestro Colegio Privado Hosanna tiene una propuesta educativa moderna que atiende los tres niveles: <strong>Inicial, Primaria y Secundaria</strong>. Nuestra razón de ser es la FORMACIÓN INTEGRAL de los estudiantes, para que sepan discernir con criterio y madurez los pilares del futuro del país.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Planteamos <strong>aprendizajes significativos</strong> que son útiles para la vida, fomentando la capacidad de liderazgo y la educación formativa en valores a través de proyectos especializados por áreas.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
            <Box
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: 4,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                height: '100%',
                minHeight: 300
              }}
            >
              <Box
                component="img"
                src="/logo-hosanna.png"
                alt="Colegio Hosanna"
                sx={{
                  width: '100%',
                  maxWidth: 280,
                  height: 'auto',
                  filter: 'drop-shadow(0 10px 15px rgba(10, 31, 68, 0.1))'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Blended Learning */}
      <Box sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        py: { xs: 8, md: 12 },
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(4,107,210,0.15) 0%, transparent 40%)'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <LaptopMacIcon sx={{ color: 'primary.light' }} />
                  <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.light' }}>Educación Híbrida</Typography>
                </Box>
                <Typography variant="h2" sx={{ color: 'white' }}>Blended Learning</Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
                  Integramos foros, videoconferencias, recursos multimedia y entornos virtuales de aprendizaje gestionados por expertos para potenciar cada área del conocimiento.
                </Typography>
                <Box sx={{ pt: 2 }}>
                  <Typography variant="h6" sx={{ color: 'primary.light', mb: 2 }}>Innovación a través de:</Typography>
                  <Grid container spacing={2}>
                    {[
                      { name: 'Flipped Classroom', icon: <LightbulbIcon sx={{ fontSize: 18 }} /> },
                      { name: 'Design Thinking', icon: <PsychologyIcon sx={{ fontSize: 18 }} /> },
                      { name: 'Gamificación', icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
                      { name: 'Aprendizaje Basado en Proyectos', icon: <Groups3Icon sx={{ fontSize: 18 }} /> }
                    ].map((item) => (
                      <Grid size={{ xs: 6 }} key={item.name}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Box sx={{ color: 'primary.light', display: 'flex' }}>{item.icon}</Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>{item.name}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
              <Grid container spacing={2}>
                {[
                  { title: 'Havruta Learning', desc: 'Debate y análisis entre pares para profundizar conceptos.' },
                  { title: 'Thinking-Based Learning', desc: 'Desarrollo del pensamiento crítico y creativo por encima de la memoria.' },
                  { title: 'Aprendizaje Cooperativo', desc: 'Gestión de metas comunes para fortalecer habilidades sociales.' },
                  { title: 'Competencias Siglo XXI', desc: 'Preparación para un mundo laboral y social altamente tecnológico.' }
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box sx={{
                      p: 3,
                      height: '100%',
                      bgcolor: 'rgba(255,255,255,0.03)',
                      borderRadius: 3,
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.07)', transform: 'translateY(-4px)' }
                    }}>
                      <Typography variant="h6" sx={{ color: 'primary.light', mb: 1, fontWeight: 700 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.6 }}>{item.desc}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>


      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>


        <Box sx={{ mt: 10, mb: 6 }} data-aos="fade-up">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <AutoAwesomeIcon color="primary" />
            <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main' }}>Extensión Extracurricular</Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 3 }}>Creative Development Learning (CDL), y (CDL) Sports</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 850, lineHeight: 1.8 }}>
            Con dos inicios al año, el programa CDL apoya a todos los estudiantes a descubrir y desarrollar sus dones y habilidades.
            Como portadores de la imagen de Dios, participan activamente en diversos campos para identificar y potenciar los diversos dones creativos que Dios les ha dado.
          </Typography>
          <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(4,107,210,0.05)', borderRadius: 2, borderLeft: '4px solid', borderColor: 'primary.main', display: 'inline-block' }}>
            <Typography variant="body2" sx={{ fontWeight: 700, fontStyle: 'italic', color: 'primary.dark' }}>
              ".. y lo he llenado del Espíritu de Dios, en sabiduría y en inteligencia, en ciencia y en todo arte.." — Éxodo 31:3
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {cdlCategories.map((cat, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={cat.name} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card sx={{
                height: '100%',
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  bgcolor: cat.color
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
                    <Box sx={{
                      p: 1.5,
                      borderRadius: '12px',
                      bgcolor: `${cat.color}15`,
                      color: cat.color,
                      display: 'flex'
                    }}>
                      {cat.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>{cat.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 600 }}>{cat.description}</Typography>
                    </Box>
                  </Stack>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {cat.items.map(item => (
                      <Box
                        key={item}
                        sx={{
                          px: 2,
                          py: 0.75,
                          borderRadius: '50px',
                          bgcolor: 'white',
                          border: '1px solid',
                          borderColor: 'divider',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: 'text.secondary',
                          transition: 'all 0.2s',
                          '&:hover': {
                            borderColor: cat.color,
                            color: cat.color,
                            bgcolor: `${cat.color}05`,
                            boxShadow: `0 4px 12px ${cat.color}15`
                          }
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Plataformas Section */}
      <Box sx={{ bgcolor: 'rgba(4,107,210,0.03)', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1 }}>
              <AppsIcon color="primary" />
              <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main' }}>Ecosistema Digital</Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2 }}>Plataformas Educativas</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 750, mx: 'auto' }}>
              Integramos las mejores herramientas digitales del mundo para potenciar el aprendizaje continuo, bilingüe, interactivo y tecnológico de nuestros alumnos.
            </Typography>
          </Box>

          <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 5 }} spacing={2.5}>
            {platforms.map((platform, idx) => (
              <Grid size={1} key={platform.name} data-aos="zoom-in" data-aos-delay={(idx % 5) * 80}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2.5,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 36px rgba(4, 107, 210, 0.12)',
                    borderColor: 'primary.light',
                  }
                }}>
                  {/* Logo Container */}
                  <Box
                    sx={{
                      height: 72,
                      width: '100%',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(245, 247, 250, 0.95)',
                      borderRadius: 2,
                      p: 1.5,
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={platform.logoPng}
                      alt={platform.name}
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        if (target.src !== platform.logoSvg && !target.src.endsWith(platform.logoSvg)) {
                          target.src = platform.logoSvg;
                        }
                      }}
                      sx={{
                        maxHeight: 48,
                        maxWidth: '92%',
                        height: 'auto',
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))',
                        transition: 'transform 0.25s ease',
                        '&:hover': {
                          transform: 'scale(1.06)',
                        },
                      }}
                    />
                  </Box>

                  {/* Badge */}
                  <Box sx={{ mb: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: 'primary.main',
                        bgcolor: 'rgba(4, 107, 210, 0.08)',
                        px: 1.2,
                        py: 0.35,
                        borderRadius: 1,
                        display: 'inline-block',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {platform.badge}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      color: 'secondary.main',
                      fontWeight: 800,
                      fontSize: '0.96rem',
                      lineHeight: 1.3,
                      minHeight: { sm: 42 },
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {platform.name}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2.5,
                      flexGrow: 1,
                      fontSize: '0.81rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {platform.description}
                  </Typography>

                  {/* Acceder Button */}
                  <Button
                    component="a"
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      mt: 'auto',
                      borderRadius: 2,
                      fontWeight: 700,
                      textTransform: 'none',
                      borderColor: 'rgba(4, 107, 210, 0.3)',
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderColor: 'primary.main',
                      }
                    }}
                  >
                    Acceder
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Áreas Académicas */}
      <Box
        id="areas-academicas"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#f8fafc',
          scrollMarginTop: { xs: '120px', md: '140px' }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1 }}>
              <SchoolIcon color="primary" />
              <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: '0.15em' }}>
                Formación Curricular de Vanguardia
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2 }}>Áreas Académicas</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 820, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Nuestra propuesta pedagógica integra rigor disciplinar, metodologías activas y herramientas digitales interactivas para potenciar el pensamiento crítico, la creatividad y las competencias del siglo XXI.
            </Typography>
          </Box>

          <Grid container spacing={3.5} alignItems="stretch">
            {/* Columna Izquierda: Opciones Verticales */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Stack spacing={1.8} data-aos="fade-right">
                {academicAreas.map((area, idx) => {
                  const isSelected = selectedAcademicIndex === idx;
                  return (
                    <Box
                      key={area.title}
                      component="button"
                      type="button"
                      onClick={() => setSelectedAcademicIndex(idx)}
                      sx={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: { xs: 2, sm: 2.2 },
                        borderRadius: 3.5,
                        cursor: 'pointer',
                        transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
                        bgcolor: isSelected ? 'primary.main' : 'background.paper',
                        color: isSelected ? '#ffffff' : 'text.primary',
                        border: '1px solid',
                        borderColor: isSelected ? 'primary.main' : 'divider',
                        boxShadow: isSelected
                          ? '0 10px 24px rgba(4, 107, 210, 0.28)'
                          : '0 2px 8px rgba(0,0,0,0.02)',
                        transform: isSelected ? 'translateX(4px)' : 'none',
                        '&:hover': {
                          bgcolor: isSelected ? 'primary.dark' : '#ffffff',
                          borderColor: isSelected ? 'primary.dark' : 'primary.light',
                          transform: 'translateX(6px)',
                          boxShadow: isSelected
                            ? '0 12px 28px rgba(4, 107, 210, 0.35)'
                            : '0 6px 18px rgba(4, 107, 210, 0.08)'
                        },
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 2.5,
                            bgcolor: isSelected ? 'rgba(255, 255, 255, 0.2)' : `${area.color}15`,
                            color: isSelected ? '#ffffff' : area.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'all 0.25s ease'
                          }}
                        >
                          {area.icon}
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: { xs: '1rem', sm: '1.05rem' },
                              color: isSelected ? '#ffffff' : 'secondary.main',
                              lineHeight: 1.2
                            }}
                          >
                            {area.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: isSelected ? 'rgba(255,255,255,0.85)' : 'text.secondary',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              display: { xs: 'none', sm: 'block' },
                              mt: 0.3
                            }}
                          >
                            {area.badge}
                          </Typography>
                        </Box>
                      </Stack>
                      <ChevronRightIcon
                        sx={{
                          fontSize: 24,
                          color: isSelected ? '#ffffff' : 'text.secondary',
                          opacity: isSelected ? 1 : 0.6,
                          transition: 'transform 0.25s ease',
                          transform: isSelected ? 'translateX(2px)' : 'none'
                        }}
                      />
                    </Box>
                  );
                })}
              </Stack>
            </Grid>

            {/* Columna Derecha: Panel de Vista */}
            <Grid size={{ xs: 12, md: 7.5 }}>
              <Card
                data-aos="fade-left"
                key={selectedAcademicIndex}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  p: { xs: 3.5, sm: 4.5, md: 5 },
                  boxShadow: '0 12px 36px rgba(10, 31, 68, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    bgcolor: academicAreas[selectedAcademicIndex].color
                  }
                }}
              >
                {/* Cabecera del Panel */}
                <Box sx={{ mb: 3.5 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        bgcolor: `${academicAreas[selectedAcademicIndex].color}18`,
                        color: academicAreas[selectedAcademicIndex].color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {academicAreas[selectedAcademicIndex].icon}
                    </Box>
                    <Box>
                      <Chip
                        label={academicAreas[selectedAcademicIndex].badge}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          bgcolor: `${academicAreas[selectedAcademicIndex].color}12`,
                          color: academicAreas[selectedAcademicIndex].color,
                          mb: 0.5
                        }}
                      />
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: '1.5rem', sm: '1.85rem', md: '2.1rem' },
                          color: 'secondary.main'
                        }}
                      >
                        {academicAreas[selectedAcademicIndex].title}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      fontSize: { xs: '0.98rem', md: '1.02rem' },
                      mt: 2
                    }}
                  >
                    {academicAreas[selectedAcademicIndex].description}
                  </Typography>
                </Box>

                {/* Secciones de Contenido detallado con bullets */}
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                  {academicAreas[selectedAcademicIndex].sections.map((section, sIdx) => (
                    <Box key={sIdx}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 800,
                          color: 'secondary.main',
                          fontSize: { xs: '1.05rem', sm: '1.15rem' },
                          mb: 1.5
                        }}
                      >
                        {section.heading}
                      </Typography>
                      <Stack spacing={1.2}>
                        {section.items.map((item, iIdx) => (
                          <Box
                            key={iIdx}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1.5,
                              lineHeight: 1.7
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: academicAreas[selectedAcademicIndex].color,
                                fontWeight: 900,
                                fontSize: '1.3rem',
                                lineHeight: 1,
                                mt: 0.2
                              }}
                            >
                              •
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontSize: { xs: '0.92rem', sm: '0.96rem' },
                                lineHeight: 1.7
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  ))}
                </Box>

                {/* Etiquetas al pie */}
                <Box
                  sx={{
                    mt: 4,
                    pt: 3,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1
                  }}
                >
                  {academicAreas[selectedAcademicIndex].tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.74rem',
                        bgcolor: `${academicAreas[selectedAcademicIndex].color}0c`,
                        color: academicAreas[selectedAcademicIndex].color,
                        border: `1px solid ${academicAreas[selectedAcademicIndex].color}25`
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 1. Área Formativa */}
      <Box id="formativa" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white', scrollMarginTop: { xs: '120px', md: '140px' } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1 }}>
              <VolunteerActivismIcon color="primary" />
              <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: '0.15em' }}>
                Área de Desarrollo Específica
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2 }}>Área Formativa</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 780, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Acompañamiento integral centrado en la salud mental, tutoría personalizada, formación a las familias y vivencia de la fe cristiana mediante cultos semanales.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {[
              {
                title: 'Promoción y Atención en Salud Mental',
                badge: 'Psicología & Inclusión',
                icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
                color: '#0288d1',
                description: 'Servicio de Psicología para atender a nuestros estudiantes y a los padres de familia, brindando apoyo integral y acompañamiento especializado en niños con alguna condición para favorecer su bienestar emocional y adaptación escolar.',
                tags: ['Servicio de Psicología', 'Atención a Estudiantes', 'Orientación a Padres', 'Apoyo en Condiciones Especiales']
              },
              {
                title: 'Tutoría',
                badge: 'Acompañamiento Personalizado',
                icon: <Groups3Icon sx={{ fontSize: 32 }} />,
                color: '#00897b',
                description: 'Contamos con 01 tutor por aula para el seguimiento continuo de cada alumno. Realizamos entrevistas individuales a estudiantes, entrevistas a las familias, reuniones con los padres de familia del grado y sesiones regulares de tutoría formativa.',
                tags: ['01 Tutor por Aula', 'Entrevistas a Estudiantes', 'Entrevistas a Familias', 'Reuniones de Grado', 'Sesiones de Tutoría']
              },
              {
                title: 'Formación a Familias',
                badge: 'Escuela de Padres',
                icon: <FamilyRestroomIcon sx={{ fontSize: 32 }} />,
                color: '#f57c00',
                description: 'Orientación y capacitaciones a padres organizadas por secciones o grados a través de nuestra Escuela de Padres, en trabajo continuo y articulado con los Comités de grado para fortalecer el rol formativo del hogar.',
                tags: ['Escuela de Padres', 'Capacitaciones por Grados', 'Comités de Grado', 'Alianza Familia-Colegio']
              },
              {
                title: 'Cultos Semanales',
                badge: 'Formación Cristiana',
                icon: <ChurchIcon sx={{ fontSize: 32 }} />,
                color: '#d81b60',
                description: 'Nuestra formación cristiana fomenta el conocimiento bíblico profundo y la vivencia de principios espirituales. Por grados y niveles, los estudiantes asisten al culto semanal de alabanza, oración y reflexión en la Palabra de Dios.',
                tags: ['Conocimiento Bíblico', 'Cultos Semanales por Grado', 'Cultos por Niveles', 'Valores Cristianos']
              }
            ].map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.title} data-aos="fade-up" data-aos-delay={idx * 100}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 36px rgba(0,0,0,0.08)',
                      borderColor: item.color
                    }
                  }}
                >
                  <Stack direction="row" spacing={2.5} alignItems="center" sx={{ mb: 2.5 }}>
                    <Box
                      sx={{
                        width: 58,
                        height: 58,
                        borderRadius: 3,
                        bgcolor: `${item.color}15`,
                        color: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      {item.badge && (
                        <Chip
                          label={item.badge}
                          size="small"
                          sx={{
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            bgcolor: `${item.color}10`,
                            color: item.color,
                            mb: 0.5
                          }}
                        />
                      )}
                      <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.15rem', sm: '1.28rem' } }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, flexGrow: 1 }}>
                    {item.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          bgcolor: `${item.color}0c`,
                          color: item.color,
                          border: `1px solid ${item.color}30`
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Cita bíblica destacada */}
          <Box
            data-aos="fade-up"
            sx={{
              mt: 6,
              p: { xs: 3.5, md: 4.5 },
              borderRadius: 4,
              bgcolor: 'rgba(4, 107, 210, 0.04)',
              border: '1px solid',
              borderColor: 'rgba(4, 107, 210, 0.15)',
              textAlign: 'center',
              maxWidth: 820,
              mx: 'auto'
            }}
          >
            <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 600, color: 'secondary.main', mb: 1, lineHeight: 1.6 }}>
              "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él."
            </Typography>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Proverbios 22:6
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. Área Deportiva */}
      <Box
        id="deportiva"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#f8fafc',
          scrollMarginTop: { xs: '120px', md: '140px' }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1 }}>
              <SportsBasketballIcon sx={{ color: '#ea580c' }} />
              <Typography variant="overline" sx={{ fontWeight: 700, color: '#ea580c', letterSpacing: '0.15em' }}>
                Área de Desarrollo Específica
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2 }}>Área Deportiva</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 820, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Promovemos el bienestar físico, la disciplina y el trabajo en equipo a través del deporte formativo, competitivo y recreativo, integrando activamente a toda la comunidad educativa.
            </Typography>
          </Box>

          {/* Tarjeta Principal con Franja Naranja Superior según la referencia */}
          <Card
            data-aos="fade-up"
            sx={{
              borderRadius: 5,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(10, 31, 68, 0.06)'
            }}
          >
            {/* 1. Franja Superior Naranja (según imagen de referencia) */}
            <Box
              sx={{
                background: 'linear-gradient(90deg, #ea580c 0%, #f97316 100%)',
                py: { xs: 2.2, sm: 2.6 },
                px: { xs: 3, sm: 4.5 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'white'
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">


              </Stack>

            </Box>

            {/* Contenido Interior de la Tarjeta */}
            <Box sx={{ p: { xs: 3.5, sm: 4.5, md: 5 } }}>
              {/* 1. EDUCACIÓN FÍSICA */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: '#ea580c',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 1
                  }}
                >
                  <SportsSoccerIcon sx={{ fontSize: 18 }} />
                  EDUCACIÓN FÍSICA
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.08rem' },
                    lineHeight: 1.85,
                    mb: 2.5
                  }}
                >
                  Promovemos el bienestar físico, la disciplina y el trabajo en equipo a través del deporte competitivo y recreativo. Contamos con canchas de loza y Grass natural, Piscinas para la práctica de Natación
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'Canchas de Loza',
                    'Grass Natural',
                    'Piscinas para Natación',
                    'Deporte Competitivo',
                    'Deporte Recreativo',
                    'Bienestar Físico & Disciplina'
                  ].map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.76rem',
                        bgcolor: 'rgba(234, 88, 12, 0.08)',
                        color: '#ea580c',
                        border: '1px solid rgba(234, 88, 12, 0.2)'
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Separador sutil */}
              <Box
                sx={{
                  width: '100%',
                  height: '1px',
                  bgcolor: 'divider',
                  my: 3.5
                }}
              />

              {/* 2. EVENTOS DEPORTIVOS */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: '#ea580c',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 1
                  }}
                >
                  <EmojiEventsIcon sx={{ fontSize: 18 }} />
                  EVENTOS DEPORTIVOS
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.08rem' },
                    lineHeight: 1.85,
                    mb: 2.5
                  }}
                >
                  Mini olimpiadas programadas en todo el año, campeonatos deportivos para padres de familia (día del padre y de la madre), juegos de Gimkana para padres y Alumnos, fortaleciendo el espíritu deportivo.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'Mini Olimpiadas en el Año',
                    'Campeonatos para Padres (Día del Padre)',
                    'Campeonatos para Madres (Día de la Madre)',
                    'Juegos de Gimkana (Padres y Alumnos)',
                    'Espíritu Deportivo e Integración'
                  ].map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.76rem',
                        bgcolor: 'rgba(10, 31, 68, 0.06)',
                        color: 'secondary.main',
                        border: '1px solid rgba(10, 31, 68, 0.15)'
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* 3. CARRUSEL DE FOTOS ("Aqui debajito iran fotos si se puede como carrusel chevere") */}
              <Box
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 4,
                  bgcolor: '#f8fafc',
                  border: '1px solid',
                  borderColor: 'divider',
                  position: 'relative'
                }}
              >
                {/* Encabezado y controles del Carrusel */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2.5,
                    flexWrap: 'wrap',
                    gap: 1.5
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 800,
                        color: 'secondary.main',
                        fontSize: { xs: '1rem', sm: '1.15rem' },
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >

                      Galería de Instalaciones y Actividades Deportivas
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Desliza horizontalmente o usa las flechas para explorar las fotografías
                    </Typography>
                  </Box>

                  {/* Flechas de Navegación < y > */}
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      onClick={() => scrollSportsCarousel('left')}
                      size="small"
                      aria-label="Foto anterior"
                      sx={{
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                        color: 'secondary.main',
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: '#ea580c',
                          color: 'white',
                          borderColor: '#ea580c'
                        }
                      }}
                    >
                      <ChevronLeftIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={() => scrollSportsCarousel('right')}
                      size="small"
                      aria-label="Siguiente foto"
                      sx={{
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                        color: 'secondary.main',
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: '#ea580c',
                          color: 'white',
                          borderColor: '#ea580c'
                        }
                      }}
                    >
                      <ChevronRightIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Box>

                {/* Track con las fotos (mostrando 4 tarjetas en fila en desktop) */}
                <Box
                  ref={sportsCarouselRef}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    pb: 1.5,
                    pt: 0.5,
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' }
                  }}
                >
                  {sportsPhotos.map((photo) => (
                    <Box
                      key={photo.id}
                      sx={{
                        minWidth: {
                          xs: '82%',
                          sm: '48%',
                          md: '32%',
                          lg: '23.8%'
                        },
                        maxWidth: {
                          xs: '82%',
                          sm: '48%',
                          md: '32%',
                          lg: '23.8%'
                        },
                        flexShrink: 0,
                        scrollSnapAlign: 'start',
                        borderRadius: 3.5,
                        overflow: 'hidden',
                        position: 'relative',
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 24px rgba(234, 88, 12, 0.15)',
                          borderColor: '#ea580c',
                          '& .sport-photo-img': {
                            transform: 'scale(1.06)'
                          }
                        }
                      }}
                    >
                      {/* Imagen con Overlay */}
                      <Box sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                        <Box
                          component="img"
                          className="sport-photo-img"
                          src={photo.image}
                          alt={photo.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.45s ease'
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to top, rgba(10,31,68,0.7) 0%, rgba(10,31,68,0.1) 60%, transparent 100%)'
                          }}
                        />
                        <Chip
                          label={photo.badge}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            bgcolor: 'rgba(234, 88, 12, 0.92)',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.68rem',
                            backdropFilter: 'blur(4px)'
                          }}
                        />
                      </Box>

                      {/* Información bajo la imagen */}
                      <Box sx={{ p: 2 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 800,
                            fontSize: '0.88rem',
                            color: 'secondary.main',
                            lineHeight: 1.3,
                            mb: 0.5
                          }}
                        >
                          {photo.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.4
                          }}
                        >
                          {photo.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>

      {/* 3. Talleres Curriculares */}
      <Box id="talleres-curriculares" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', scrollMarginTop: { xs: '120px', md: '140px' } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1 }}>
              <AutoAwesomeIcon color="primary" />
              <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: '0.15em' }}>
                Área de Desarrollo Específica
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2 }}>Talleres Curriculares</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 780, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Talleres pedagógicos integrados en nuestra malla curricular para potenciar la creatividad, el razonamiento analítico, la expresión artística y las habilidades prácticas.
            </Typography>
          </Box>

          <Grid container spacing={2.5} justifyContent="center">
            {[
              { number: '01', title: 'Taekwondo', icon: <SportsMartialArtsIcon sx={{ fontSize: 26 }} />, color: '#d81b60' },
              { number: '02', title: 'Violín', icon: <MusicNoteIcon sx={{ fontSize: 26 }} />, color: '#046bd2' },
              { number: '03', title: 'Batería', icon: <MusicNoteIcon sx={{ fontSize: 26 }} />, color: '#e65100' },
              { number: '04', title: 'Gastronomía', icon: <RestaurantIcon sx={{ fontSize: 26 }} />, color: '#00897b' },
              { number: '05', title: 'Ajedrez', icon: <PsychologyIcon sx={{ fontSize: 26 }} />, color: '#5e35b1' },
              { number: '06', title: 'Manualidades', icon: <PaletteIcon sx={{ fontSize: 26 }} />, color: '#f57c00' },
              { number: '07', title: 'Danza (Marinera)', icon: <CelebrationIcon sx={{ fontSize: 26 }} />, color: '#c2185b' }
            ].map((taller, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={taller.title} data-aos="fade-up" data-aos-delay={idx * 60}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    p: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: '4px',
                      bgcolor: taller.color
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 28px ${taller.color}20`,
                      borderColor: taller.color
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2.5,
                      bgcolor: `${taller.color}15`,
                      color: taller.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {taller.icon}
                  </Box>
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 800,
                        color: taller.color,
                        fontSize: '0.74rem',
                        letterSpacing: '0.1em',
                        display: 'block',
                        lineHeight: 1
                      }}
                    >
                      • {taller.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: '1.05rem', sm: '1.12rem' },
                        color: 'secondary.main',
                        lineHeight: 1.25,
                        mt: 0.5
                      }}
                    >
                      {taller.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Certificaciones Internacionales */}
      <Box
        id="certificaciones"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#f8fafc',
          scrollMarginTop: { xs: '120px', md: '140px' }
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1.5 }}>
              <WorkspacePremiumIcon sx={{ color: '#046bd2', fontSize: 28 }} />
              <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '0.15em', fontSize: '0.85rem' }}>
                CENTRO AUTORIZADO DE EVALUACIÓN
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: 'secondary.main' }}>
              Certificaciones Internacionales en Inglés
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 820, mx: 'auto', fontSize: '1.08rem', lineHeight: 1.8 }}>
              Somos <strong>centro autorizado</strong> para rendir los exámenes de certificación en inglés. Nuestros alumnos pueden acceder a certificarse en el idioma inglés, según el nivel y grado en que se encuentren cursando en nuestra institución educativa.
            </Typography>
          </Box>

          {/* Master Highlight Card: Centro Autorizado ETS */}
          <Card
            data-aos="fade-up"
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              mb: { xs: 6, md: 8 },
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'rgba(4, 107, 210, 0.2)',
              background: 'linear-gradient(135deg, #0a1f44 0%, #0d3b75 60%, #046bd2 100%)',
              color: 'white',
              boxShadow: '0 20px 45px rgba(10, 31, 68, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Subtle background decoration */}
            <Box
              sx={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 240,
                height: 240,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
              {/* Official Seal */}
              <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    p: 1,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.2))',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                    mb: 2
                  }}
                >
                  <Box
                    component="img"
                    src="/certifications/toefl-authorized-center.jpg"
                    alt="TOEFL Primary Authorized Test Center - Colegio Hosanna"
                    sx={{
                      width: { xs: 140, sm: 160, md: 175 },
                      height: { xs: 140, sm: 160, md: 175 },
                      borderRadius: '50%',
                      objectFit: 'cover',
                      display: 'block',
                      border: '3px solid white',
                      bgcolor: 'white'
                    }}
                  />
                </Box>
                <Chip
                  icon={<VerifiedIcon sx={{ fontSize: '1rem !important', color: '#046bd2 !important' }} />}
                  label="Authorized Test Center"
                  sx={{
                    fontWeight: 700,
                    bgcolor: 'white',
                    color: '#0a1f44',
                    fontSize: '0.8rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                />
              </Grid>

              {/* Text Information */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Chip
                  label="ACREDITACIÓN INSTITUCIONAL ETS"
                  size="small"
                  sx={{
                    fontWeight: 800,
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    bgcolor: 'rgba(255,255,255,0.18)',
                    color: 'white',
                    mb: 1.5,
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}
                />
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '1.5rem', sm: '1.85rem', md: '2.1rem' }, color: 'white' }}>
                  Sede Oficial para Exámenes de Certificación
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.92, lineHeight: 1.8, fontSize: { xs: '0.98rem', sm: '1.05rem' }, mb: 3 }}>
                  El <strong>Colegio Hosanna</strong> está acreditado como centro autorizado por <strong>ETS (Educational Testing Service)</strong>. Esto permite a nuestros estudiantes rendir sus pruebas internacionales en sus propias aulas, con la cercanía de sus docentes y la validez formal que exigen las instituciones académicas a nivel mundial.
                </Typography>

                <Grid container spacing={2}>
                  {[
                    { title: 'Exámenes In Situ', desc: 'Rinden dentro del colegio con tranquilidad y comodidad' },
                    { title: 'Estándar Internacional', desc: 'Alineado al Marco Común Europeo de Referencia (MCER)' },
                    { title: 'Desde Primaria a Secundaria', desc: 'Progresión articulada desde 5.° de Primaria' }
                  ].map((feat, i) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={i}>
                      <Box sx={{ p: 1.8, borderRadius: 2.5, bgcolor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)', height: '100%' }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.92rem', color: '#64b5f6', mb: 0.5, display: 'flex', alignItems: 'center', gap: 0.8 }}>
                          <CheckCircleIcon sx={{ fontSize: '1rem', color: '#4caf50' }} />
                          {feat.title}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.82, lineHeight: 1.5, display: 'block' }}>
                          {feat.desc}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Card>

          {/* Didactic Section 2: Ruta de Ubicación por Niveles */}
          <Box sx={{ mb: { xs: 6, md: 8 } }} data-aos="fade-up">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Chip
                label="METODOLOGÍA DIDÁCTICA Y PREPARACIÓN"
                size="small"
                sx={{
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  bgcolor: 'rgba(4, 107, 210, 0.1)',
                  color: 'primary.main',
                  mb: 1
                }}
              />
              <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.45rem', sm: '1.85rem' }, color: 'secondary.main', mb: 1.5 }}>
                Ubicación por Niveles: Del 5.° Grado de Primaria al 5.° Año de Secundaria
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 760, mx: 'auto', fontSize: '1rem', lineHeight: 1.7 }}>
                Para garantizar que cada estudiante alcance su máxima certificación, a partir del 5to grado de primaria hasta el 5to año de secundaria los organizamos en <strong>tres niveles de dominio</strong> según su progreso y habilidades:
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {[
                {
                  step: '01',
                  level: 'Nivel Básico',
                  badge: 'Etapa Inicial & Bases',
                  color: '#0288d1',
                  lightColor: 'rgba(2, 136, 209, 0.08)',
                  borderColor: 'rgba(2, 136, 209, 0.25)',
                  description: 'Consolidación de las estructuras lingüísticas fundamentales, vocabulario activo y desarrollo de la confianza comunicativa en situaciones cotidianas.',
                  highlights: [
                    'Afianzamiento de vocabulario y pronunciación básica',
                    'Comprensión auditiva (Listening) en oraciones y órdenes sencillas',
                    'Inmersión progresiva y motivación constante'
                  ]
                },
                {
                  step: '02',
                  level: 'Nivel Intermedio',
                  badge: 'Desarrollo & Fluidez',
                  color: '#0d47a1',
                  lightColor: 'rgba(13, 71, 161, 0.08)',
                  borderColor: 'rgba(13, 71, 161, 0.25)',
                  description: 'Ampliación de destrezas comunicativas con mayor vocabulario, comprensión lectora guiada y expresión oral con espontaneidad en el aula.',
                  highlights: [
                    'Fluidez en interacción oral y dinámicas participativas',
                    'Comprensión de lectura (Reading) de textos estructurados',
                    'Redacción inicial de párrafos y expresiones formales'
                  ]
                },
                {
                  step: '03',
                  level: 'Nivel Avanzado',
                  badge: 'Dominio & Preparación TOEFL',
                  color: '#e65100',
                  lightColor: 'rgba(230, 81, 0, 0.08)',
                  borderColor: 'rgba(230, 81, 0, 0.25)',
                  description: 'Entrenamiento intensivo en destrezas complejas, análisis textual académico y simulación continua bajo los estándares internacionales exigidos por ETS.',
                  highlights: [
                    'Comprensión crítica y argumentación oral avanzada',
                    'Estructuras sintácticas y gramaticales formales',
                    'Práctica con modelos reales de exámenes TOEFL'
                  ]
                }
              ].map((tier, idx) => (
                <Grid size={{ xs: 12, md: 4 }} key={tier.level} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 3.5,
                      borderRadius: 4,
                      border: '1.5px solid',
                      borderColor: tier.borderColor,
                      bgcolor: 'white',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 16px 36px ${tier.color}25`,
                        borderColor: tier.color
                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 5,
                        bgcolor: tier.color
                      }}
                    />

                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          bgcolor: tier.lightColor,
                          color: tier.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 900,
                          fontSize: '1.1rem',
                          border: `1.5px solid ${tier.color}35`
                        }}
                      >
                        {tier.step}
                      </Box>
                      <Chip
                        label={tier.badge}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          bgcolor: tier.lightColor,
                          color: tier.color,
                          border: `1px solid ${tier.color}30`
                        }}
                      />
                    </Stack>

                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1, fontSize: '1.35rem' }}>
                      {tier.level}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                      {tier.description}
                    </Typography>

                    <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid #f0f0f0' }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', mb: 1.2 }}>
                        Ejes de Aprendizaje:
                      </Typography>
                      <Stack spacing={1}>
                        {tier.highlights.map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                            <CheckCircleIcon sx={{ fontSize: '1rem', color: tier.color, mt: 0.2, flexShrink: 0 }} />
                            <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.85rem', lineHeight: 1.5 }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Section 3: Exámenes Internacionales por Nivel Escolar (Primaria vs Secundaria) */}
          <Box data-aos="fade-up">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Chip
                label="EVALUACIONES OFICIALES"
                size="small"
                sx={{
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  bgcolor: 'rgba(4, 107, 210, 0.1)',
                  color: 'primary.main',
                  mb: 1
                }}
              />
              <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.45rem', sm: '1.85rem' }, color: 'secondary.main', mb: 1.5 }}>
                Exámenes Internacionales según el Nivel Escolar
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 760, mx: 'auto', fontSize: '1rem', lineHeight: 1.7 }}>
                Nuestros alumnos rinden pruebas especialmente diseñadas para su etapa formativa, otorgándoles un certificado con validez internacional emitido directamente por <strong>ETS</strong>.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {/* Card Nivel Primaria: TOEFL Primary */}
              <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay={100}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1.5px solid',
                    borderColor: 'rgba(4, 107, 210, 0.25)',
                    bgcolor: 'white',
                    p: { xs: 3, sm: 4 },
                    boxShadow: '0 10px 30px rgba(4, 107, 210, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 18px 40px rgba(4, 107, 210, 0.18)',
                      borderColor: '#046bd2'
                    }
                  }}
                >
                  {/* Top Level Badge */}
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Chip
                      icon={<SchoolIcon sx={{ fontSize: '1.1rem !important', color: '#046bd2 !important' }} />}
                      label="NIVEL PRIMARIA"
                      sx={{
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        letterSpacing: '0.08em',
                        bgcolor: 'rgba(4, 107, 210, 0.12)',
                        color: '#046bd2',
                        px: 1
                      }}
                    />
                    <Chip
                      label="Desde 5.° Grado"
                      size="small"
                      sx={{
                        fontWeight: 700,
                        bgcolor: '#f1f5f9',
                        color: 'text.secondary'
                      }}
                    />
                  </Stack>

                  {/* Logo Container */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      bgcolor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      minHeight: 100
                    }}
                  >
                    <Box
                      component="img"
                      src="/certifications/toefl-primary.png"
                      alt="ETS TOEFL Primary - Certificación de Inglés para Primaria"
                      sx={{
                        maxWidth: '100%',
                        maxHeight: 65,
                        width: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>

                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1, fontSize: { xs: '1.3rem', sm: '1.5rem' } }}>
                    Certificación TOEFL Primary®
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                    Nuestros alumnos de nivel primaria pueden acceder a rendir este examen internacional y certificarse con respaldo global. Mide las destrezas comunicativas y el razonamiento en inglés en las primeras etapas de formación escolar.
                  </Typography>

                  {/* Evaluated Skills */}
                  <Box sx={{ mb: 3, p: 2.5, borderRadius: 3, bgcolor: 'rgba(4, 107, 210, 0.04)', border: '1px solid rgba(4, 107, 210, 0.15)' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main', mb: 1.5, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
                      Competencias Evaluadas en Primaria:
                    </Typography>

                    <Stack spacing={1.5}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                        <HeadphonesIcon sx={{ fontSize: '1.2rem', color: '#046bd2', mt: 0.2, flexShrink: 0 }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9rem' }}>
                            Listening Comprehension
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1.4 }}>
                            Comprensión auditiva de diálogos cotidianos, instrucciones escolares y expresiones habituales.
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                        <MenuBookIcon sx={{ fontSize: '1.2rem', color: '#046bd2', mt: 0.2, flexShrink: 0 }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9rem' }}>
                            Reading Comprehension
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1.4 }}>
                            Lectura comprensiva de oraciones, historias breves y vocabulario contextual escolar.
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Key Highlights */}
                  <Box sx={{ mt: 'auto' }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      <Chip label="Certificado Oficial ETS" size="small" sx={{ fontWeight: 600, bgcolor: 'rgba(4,107,210,0.1)', color: '#046bd2' }} />
                      <Chip label="Descriptores MCER" size="small" sx={{ fontWeight: 600, bgcolor: 'rgba(4,107,210,0.1)', color: '#046bd2' }} />
                      <Chip label="Puntaje Lexile®" size="small" sx={{ fontWeight: 600, bgcolor: 'rgba(4,107,210,0.1)', color: '#046bd2' }} />
                    </Stack>
                  </Box>
                </Card>
              </Grid>

              {/* Card Nivel Secundaria: TOEFL ITP */}
              <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay={200}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1.5px solid',
                    borderColor: 'rgba(10, 31, 68, 0.25)',
                    bgcolor: 'white',
                    p: { xs: 3, sm: 4 },
                    boxShadow: '0 10px 30px rgba(10, 31, 68, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 18px 40px rgba(10, 31, 68, 0.18)',
                      borderColor: '#0a1f44'
                    }
                  }}
                >
                  {/* Top Level Badge */}
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Chip
                      icon={<SchoolIcon sx={{ fontSize: '1.1rem !important', color: '#0a1f44 !important' }} />}
                      label="NIVEL SECUNDARIA"
                      sx={{
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        letterSpacing: '0.08em',
                        bgcolor: 'rgba(10, 31, 68, 0.1)',
                        color: '#0a1f44',
                        px: 1
                      }}
                    />
                    <Chip
                      label="Hasta 5.° Año"
                      size="small"
                      sx={{
                        fontWeight: 700,
                        bgcolor: '#f1f5f9',
                        color: 'text.secondary'
                      }}
                    />
                  </Stack>

                  {/* Logo Container */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      bgcolor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      minHeight: 100
                    }}
                  >
                    <Box
                      component="img"
                      src="/certifications/toefl-itp.png"
                      alt="ETS TOEFL ITP - Certificación Internacional para Secundaria"
                      sx={{
                        maxWidth: '90%',
                        maxHeight: 75,
                        width: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>

                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1, fontSize: { xs: '1.3rem', sm: '1.5rem' } }}>
                    Certificación TOEFL ITP®
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                    Nuestros alumnos de nivel secundaria pueden acceder a rendir el examen internacional TOEFL ITP y certificarse con reconocimiento académico de alto nivel, acreditando su suficiencia para entornos superiores y universitarios.
                  </Typography>

                  {/* Evaluated Skills */}
                  <Box sx={{ mb: 3, p: 2.5, borderRadius: 3, bgcolor: 'rgba(10, 31, 68, 0.04)', border: '1px solid rgba(10, 31, 68, 0.15)' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1.5, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
                      Competencias Evaluadas en Secundaria:
                    </Typography>

                    <Stack spacing={1.5}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                        <HeadphonesIcon sx={{ fontSize: '1.2rem', color: '#0a1f44', mt: 0.2, flexShrink: 0 }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9rem' }}>
                            Listening Comprehension
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1.4 }}>
                            Comprensión auditiva de exposiciones, conferencias breves y debates académicos.
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                        <CreateIcon sx={{ fontSize: '1.2rem', color: '#0a1f44', mt: 0.2, flexShrink: 0 }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9rem' }}>
                            Structure & Written Expression
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1.4 }}>
                            Dominio estructural, gramatical y sintáctico en redacciones formales de nivel preuniversitario.
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                        <MenuBookIcon sx={{ fontSize: '1.2rem', color: '#0a1f44', mt: 0.2, flexShrink: 0 }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9rem' }}>
                            Reading Comprehension
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1.4 }}>
                            Lectura analítica profunda y comprensión de pasajes y textos académicos complejos.
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Key Highlights */}
                  <Box sx={{ mt: 'auto' }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      <Chip label="Validez Universitaria" size="small" sx={{ fontWeight: 600, bgcolor: 'rgba(10,31,68,0.1)', color: '#0a1f44' }} />
                      <Chip label="Equivalencia MCER B1 - C1" size="small" sx={{ fontWeight: 600, bgcolor: 'rgba(10,31,68,0.1)', color: '#0a1f44' }} />
                      <Chip label="Acreditación Internacional" size="small" sx={{ fontWeight: 600, bgcolor: 'rgba(10,31,68,0.1)', color: '#0a1f44' }} />
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 5. Ensamble de Cuerdas */}
      <Box
        id="ensamblaje-de-cuerdas"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'secondary.main',
          color: 'white',
          position: 'relative',
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(4,107,210,0.2) 0%, transparent 50%)',
          scrollMarginTop: { xs: '120px', md: '140px' }
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 7 }} data-aos="fade-up">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center', mb: 1.5 }}>
              <MusicNoteIcon sx={{ color: 'primary.light', fontSize: 28 }} />
              <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.light', letterSpacing: '0.15em', fontSize: '0.85rem' }}>
                FORMACIÓN ARTÍSTICA E INSTRUMENTAL
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2, color: 'white', fontWeight: 800 }}>
              Ensamble de Cuerdas
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 820, mx: 'auto', fontSize: '1.08rem', lineHeight: 1.8 }}>
              Consideramos que la música es un pilar fundamental dentro de la formación de nuestros alumnos, por ello contamos con nuestro <strong>Ensamble de Cuerdas</strong>, conformado por alumnos de <strong>Primaria y Secundaria</strong>.
            </Typography>
          </Box>

          <Grid container spacing={3.5} sx={{ mb: 4 }}>
            {/* Tarjeta 1: Audición e Integración */}
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay={100}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  p: { xs: 3, sm: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: '#00e5ff',
                    boxShadow: '0 16px 36px rgba(0, 229, 255, 0.2)'
                  }
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      bgcolor: 'rgba(0, 229, 255, 0.15)',
                      color: '#00e5ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Chip
                      label="CONVOCATORIA & AUDICIONES"
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        bgcolor: 'rgba(0, 229, 255, 0.15)',
                        color: '#00e5ff',
                        mb: 0.5,
                        border: '1px solid rgba(0, 229, 255, 0.3)'
                      }}
                    />
                    <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.25rem', sm: '1.4rem' }, color: 'white' }}>
                      Audición e Integración
                    </Typography>
                  </Box>
                </Stack>

                <Typography variant="body1" sx={{ opacity: 0.88, lineHeight: 1.8, mb: 3, flexGrow: 1 }}>
                  Los alumnos que desean integrar el Ensamble de Cuerdas deberán participar en una <strong>audición</strong>. Se admiten alumnos desde el <strong>4to grado de primaria hasta el 5to año de secundaria</strong>, promoviendo la disciplina artística, el oído musical y el trabajo en equipo.
                </Typography>

                <Box sx={{ p: 2, borderRadius: 2.5, bgcolor: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)', mb: 2.5 }}>
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: '1.1rem', color: '#00e5ff' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Alumnos de 4.° Grado de Primaria a 5.° Año de Secundaria
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: '1.1rem', color: '#00e5ff' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Proceso de audición y evaluación de aptitud musical
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Audición Previa', 'Primaria & Secundaria', 'Disciplina Instrumental', 'Talento Hosanna'].map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        bgcolor: 'rgba(255,255,255,0.08)',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.15)'
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>

            {/* Tarjeta 2: Actividades y Aniversario */}
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay={200}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  p: { xs: 3, sm: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: '#ff4081',
                    boxShadow: '0 16px 36px rgba(255, 64, 129, 0.2)'
                  }
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      bgcolor: 'rgba(255, 64, 129, 0.15)',
                      color: '#ff4081',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <CelebrationIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Chip
                      label="VIDA INSTITUCIONAL"
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        bgcolor: 'rgba(255, 64, 129, 0.15)',
                        color: '#ff80ab',
                        mb: 0.5,
                        border: '1px solid rgba(255, 64, 129, 0.3)'
                      }}
                    />
                    <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.25rem', sm: '1.4rem' }, color: 'white' }}>
                      Celebraciones y Aniversario
                    </Typography>
                  </Box>
                </Stack>

                <Typography variant="body1" sx={{ opacity: 0.88, lineHeight: 1.8, mb: 3, flexGrow: 1 }}>
                  El Ensamble de Cuerdas participa dentro de las <strong>actividades de celebración</strong> y en el <strong>Aniversario de nuestro colegio Hosanna</strong>, engalanando cada ceremonia con su repertorio instrumental y brindando un testimonio vivo de excelencia y alabanza.
                </Typography>

                <Box sx={{ p: 2, borderRadius: 2.5, bgcolor: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)', mb: 2.5 }}>
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: '1.1rem', color: '#ff4081' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Participación estelar en el Aniversario del Colegio Hosanna
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: '1.1rem', color: '#ff4081' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Acompañamiento en ceremonias protocolares y cultos especiales
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Aniversario Hosanna', 'Actividades Institucionales', 'Repertorio de Gala', 'Presencia Escénica'].map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        bgcolor: 'rgba(255,255,255,0.08)',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.15)'
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* Tarjeta Destacada: 8vo Concierto del Ensamble de Cuerdas (Noviembre 2026) */}
          <Card
            data-aos="zoom-in"
            sx={{
              p: { xs: 3.5, sm: 4.5, md: 5 },
              mb: 5,
              borderRadius: 4,
              border: '2px solid',
              borderColor: 'rgba(255, 179, 0, 0.4)',
              background: 'linear-gradient(135deg, rgba(255, 179, 0, 0.12) 0%, rgba(13, 71, 161, 0.3) 50%, rgba(10, 31, 68, 0.6) 100%)',
              backdropFilter: 'blur(16px)',
              color: 'white',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                  <EmojiEventsIcon sx={{ color: '#ffb300', fontSize: 26 }} />
                  <Chip
                    label="HITO ARTÍSTICO ANUAL • NOVIEMBRE 2026"
                    size="small"
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      bgcolor: 'rgba(255, 179, 0, 0.2)',
                      color: '#ffc107',
                      border: '1px solid rgba(255, 179, 0, 0.4)'
                    }}
                  />
                </Stack>

                <Typography variant="h3" sx={{ fontWeight: 800, color: 'white', mb: 1.5, fontSize: { xs: '1.6rem', sm: '2rem', md: '2.3rem' } }}>
                  8.° Concierto de nuestro Ensamble de Cuerdas
                </Typography>

                <Typography variant="body1" sx={{ opacity: 0.92, lineHeight: 1.8, fontSize: { xs: '1rem', sm: '1.08rem' }, mb: 2 }}>
                  Culminando el ciclo anual en el mes de <strong>Noviembre</strong>, nuestros alumnos presentan su recital magno de cierre de año. <strong>Este año 2026 será el 8vo. Concierto de nuestro ENSAMBLE de Cuerdas</strong>, una celebración inolvidable donde comparten con las familias y la comunidad el fruto de su perseverancia, entrega y pasión musical.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AutoAwesomeIcon sx={{ color: '#ffb300', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#ffe082' }}>
                      8 Años de Tradición Musical
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MusicNoteIcon sx={{ color: '#ffb300', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#ffe082' }}>
                      Mes de Gala: Noviembre 2026
                    </Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    textAlign: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    border: '1.5px solid rgba(255, 179, 0, 0.35)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                    width: '100%',
                    maxWidth: 280
                  }}
                >
                  <Typography variant="overline" sx={{ fontWeight: 800, color: '#ffb300', letterSpacing: '0.15em', display: 'block' }}>
                    EDICIÓN 2026
                  </Typography>
                  <Typography variant="h1" sx={{ fontWeight: 900, color: 'white', fontSize: { xs: '3.5rem', sm: '4.2rem' }, lineHeight: 1, my: 1 }}>
                    8<span style={{ fontSize: '2rem', color: '#ffb300' }}>vo.</span>
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
                    Concierto de Gala
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', mt: 0.5 }}>
                    Mes de Noviembre
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>

          {/* Fotografía del Concierto de Gala del Ensamble */}
          <Box
            data-aos="fade-up"
            sx={{
              mb: 5,
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
              border: '1.5px solid rgba(255, 179, 0, 0.3)',
              maxHeight: { xs: 360, sm: 480, md: 540 },
              bgcolor: 'rgba(10, 31, 68, 0.6)',
              '&:hover img': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <Box
              component="img"
              src="/hs-photos/ensamblaje2.jpeg"
              alt="Concierto de Gala del Ensamble de Cuerdas - Colegio Hosanna"
              sx={{
                width: '100%',
                height: '100%',
                maxHeight: { xs: 360, sm: 480, md: 540 },
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: { xs: 2.5, sm: 3.5 },
                pt: { xs: 6, sm: 8 },
                background: 'linear-gradient(to top, rgba(10, 31, 68, 0.95) 0%, rgba(10, 31, 68, 0.65) 60%, transparent 100%)',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'flex-end' },
                gap: 1.5
              }}
            >
              <Box>
                <Chip
                  icon={<MusicNoteIcon style={{ color: '#ffb300' }} />}
                  label="Presentación en Vivo"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255, 179, 0, 0.2)',
                    color: '#ffc107',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    mb: 1,
                    border: '1px solid rgba(255, 179, 0, 0.35)'
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                  Ensamble de Cuerdas Hosanna en Concierto
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: 680, mt: 0.5 }}>
                  Nuestros estudiantes compartiendo con las familias y la comunidad el fruto de su dedicación, disciplina y adoración musical.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Cita artística y bíblica */}
          <Box
            data-aos="fade-up"
            sx={{
              p: { xs: 3.5, md: 4.5 },
              borderRadius: 4,
              bgcolor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              textAlign: 'center',
              maxWidth: 820,
              mx: 'auto'
            }}
          >
            <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 600, color: 'primary.light', mb: 1, lineHeight: 1.6 }}>
              "Alabadle con salterio y arpa... Alabadle con cuerdas y flautas... Todo lo que respira alabe a Jehová."
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Salmos 150:3, 4, 6
            </Typography>
          </Box>
        </Container>
      </Box>



      <Footer />
    </Box>
  );
}

export { EducationalProposalPage as PropuestaEducativaPage };
