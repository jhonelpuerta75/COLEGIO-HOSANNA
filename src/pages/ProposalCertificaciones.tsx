import EducationalProposalLayout from '../components/EducationalProposalLayout';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function ProposalCertificaciones() {
  return (
    <EducationalProposalLayout
      category="Propuesta Educativa"
      title="Certificaciones"
      subtitle="Convenios y acreditaciones nacionales e internacionales que avalan el nivel de inglés, competencias digitales y excelencia pedagógica."
      icon={<WorkspacePremiumIcon sx={{ fontSize: 52, color: 'primary.main' }} />}
    />
  );
}
