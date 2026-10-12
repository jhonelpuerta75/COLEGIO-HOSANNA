import EducationalProposalLayout from '../components/EducationalProposalLayout';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function ProposalFormativa() {
  return (
    <EducationalProposalLayout
      category="Áreas de Desarrollo Específicas"
      title="Formativa"
      subtitle="Educación centrada en valores cristianos, formación del carácter, disciplina con amor y desarrollo integral del ser humano."
      icon={<VolunteerActivismIcon sx={{ fontSize: 52, color: 'primary.main' }} />}
    />
  );
}
