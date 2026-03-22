import { Subject } from './mockData';
import { biologyTopicsPart2 } from './biologyData2';

export const biologySubject: Subject = {
  id: 'biology',
  title: 'Biology',
  icon: 'Dna',
  color: 'from-emerald-900 to-black',
  topics: [
    {
      id: 'bio-1',
      title: '1. Characteristics and Classification of Living Organisms',
      description: 'Characteristics of living organisms, concept and use of a classification system, features of organisms, dichotomous keys.',
      notes: [
        {
          id: 'pmt-1',
          title: '1. Characteristics and classification of living organisms (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/1-Characteristics-and-Classification-of-Living-Organisms/Summary%20Notes%20-%20Topic%201%20Characteristics%20and%20Classification%20of%20Living%20Organisms%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-2',
      title: '2. Organization of the Organism',
      description: 'Cell structure and organization, levels of organization, size of specimens.',
      notes: [
        {
          id: 'pmt-2',
          title: '2. Organisation of organism (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/2-Organisation-of-the-Organism/Summary%20Notes%20-%20Topic%202%20Organisation%20of%20the%20Organism%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-3',
      title: '3. Movement In and Out of Cells',
      description: 'Diffusion, osmosis, active transport.',
      notes: [
        {
          id: 'pmt-3',
          title: '3. Movement in out of cells (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/3-Movement-into-and-out-of-Cells/Summary%20Notes%20-%20Topic%203%20Movement%20Into%20and%20out%20of%20Cells%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-4',
      title: '4. Biological Molecules',
      description: 'Carbohydrates, fats, proteins, DNA, water, food tests.',
      notes: [
        {
          id: 'pmt-4',
          title: '4. Biological molecules (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/4-Biological-Molecules/Summary%20Notes%20-%20Topic%204%20Biological%20Molecules%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-5',
      title: '5. Enzymes',
      description: 'Enzyme action, effects of temperature and pH.',
      notes: [
        {
          id: 'pmt-5',
          title: '5. Enzymes (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/5-Enzymes/Summary%20Notes%20-%20Topic%205%20Enzymes%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-6',
      title: '6. Plant Nutrition',
      description: 'Photosynthesis, leaf structure, mineral requirements.',
      notes: [
        {
          id: 'pmt-6',
          title: '6. Plant nutrition (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/6-Plant-Nutrition/Summary%20Notes%20-%20Topic%206%20Plant%20Nutrition%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-7',
      title: '7. Human Nutrition',
      description: 'Diet, alimentary canal, digestion, absorption.',
      notes: [
        {
          id: 'pmt-7',
          title: '7. Human nutrition (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/7-Human-Nutrition/Summary%20Notes%20-%20Topic%207%20Human%20Nutrition%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-8',
      title: '8. Transport in Plants',
      description: 'Xylem and phloem, water uptake, transpiration, translocation.',
      notes: [
        {
          id: 'pmt-8',
          title: '8. Transport in plants (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/8-Transport-in-Plants/Summary%20Notes%20-%20Topic%208%20Transport%20in%20Plants%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-9',
      title: '9. Transport in Animals',
      description: 'Circulatory system, heart, blood vessels, blood.',
      notes: [
        {
          id: 'pmt-9',
          title: '9. Transport in animals (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/9-Transport-in-Animals/Summary%20Notes%20-%20Topic%209%20Transport%20in%20Animals%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    {
      id: 'bio-10',
      title: '10. Diseases and Immunity',
      description: 'Pathogens, transmission, defenses, immunity.',
      notes: [
        {
          id: 'pmt-10',
          title: '10. Diseases and immunity (PMT Summary Notes)',
          content: '',
          pdfUrl: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/10-Diseases-and-Immunity/Summary%20Notes%20-%20Topic%2010%20Diseases%20and%20Immunity%20-%20CAIE%20Biology%20IGCSE.pdf'
        }
      ]
    },
    ...biologyTopicsPart2
  ]
};
