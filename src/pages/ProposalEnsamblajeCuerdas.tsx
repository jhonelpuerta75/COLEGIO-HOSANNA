import EducationalProposalLayout from '../components/EducationalProposalLayout';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function ProposalEnsamblajeCuerdas() {
  return (
    <EducationalProposalLayout
      category="Propuesta Educativa"
      title="Ensamblaje de Cuerdas"
      subtitle="Elaborado programa de música instrumental de cámara y orquesta para formar el talento musical, el oído y la sensibilidad artística."
      icon={<MusicNoteIcon sx={{ fontSize: 52, color: 'primary.main' }} />}
    />
  );
}
