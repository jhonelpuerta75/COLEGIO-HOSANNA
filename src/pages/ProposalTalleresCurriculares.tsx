import EducationalProposalLayout from '../components/EducationalProposalLayout';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function ProposalTalleresCurriculares() {
  return (
    <EducationalProposalLayout
      category="Áreas de Desarrollo Específicas"
      title="Talleres Curriculares"
      subtitle="Talleres pedagógicos integrados en nuestra malla curricular para potenciar la creatividad, el razonamiento y las habilidades prácticas."
      icon={<AutoAwesomeIcon sx={{ fontSize: 52, color: 'primary.main' }} />}
    />
  );
}
