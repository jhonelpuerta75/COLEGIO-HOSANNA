import EducationalProposalLayout from '../components/EducationalProposalLayout';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export default function ProposalDeportiva() {
  return (
    <EducationalProposalLayout
      category="Áreas de Desarrollo Específicas"
      title="Deportiva"
      subtitle="Promovemos la salud física, el juego limpio, el liderazgo y el trabajo en equipo a través de disciplinas deportivas formativas y competitivas."
      icon={<SportsBasketballIcon sx={{ fontSize: 52, color: 'primary.main' }} />}
    />
  );
}
