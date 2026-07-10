// Configuración de Admisión y Matrícula 
export const admissionConfig = {
  // Año del proceso de admisión actual
  admissionYear: '2027',

  // Fechas del proceso de inscripción
  registrationStartDate: '17 de octubre de 2026',
  registrationEndDate: '20 de enero de 2027',
  registrationEndDateShort: '20 de Enero', // Formato simplificado sin año para algunos textos
  ageCutoffDate: '31 de marzo del 2027', // Fecha límite para la edad mínima (Inicial)

  // Enlace del formulario oficial de admisión en SIANET
  sianetFormUrl: 'https://www.sianet.pe/HosannaPucallpa/Admision/InformacionProcesoAdmision/Index?IA=tmp5ZeD5sJs000',

  // Costos por Nivel Académico
  costs: {
    inicial: {
      enrollment: '650.00', // Matrícula
      tuition: '650.00',    // Pensión
    },
    primaria: {
      enrollment: '710.00',
      tuition: '710.00',
    },
    secundaria: {
      enrollment: '740.00',
      tuition: '740.00',
    },
    discountOnTime: '30.00', // Descuento por pago puntual (antes del último día del mes)
  },
};
