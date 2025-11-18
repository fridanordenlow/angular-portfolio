import { IEducation } from '../models/education.model';

export const education: IEducation[] = [
  {
    id: 'medieinstitutet-frontend',
    school: 'Medieinstitutet',
    program: 'Front End Developer',
    degree: undefined,
    credits: '400 YHP',
    fieldOfStudy: 'Frontend Development',
    startDate: 'Sep 2024',
    endDate: 'May 2026',
    location: 'Remote (Stockholm)',
    description:
      'Vocational higher education providing advanced web development skills with a focus on user experience and modern technologies such as JavaScript, HTML, CSS, frameworks like React and Vue, as well as backend development using Node.js, Express.js, and databases.',
  },
  {
    id: 'technigo-webdev',
    school: 'Technigo',
    program: 'Web Development Bootcamp',
    degree: undefined,
    fieldOfStudy: 'Web Development',
    startDate: 'Mar 2023',
    endDate: 'Jun 2023',
    location: 'Remote (Stockholm)',
    description:
      'An intensive web development program focused on JavaScript, modern frameworks, and building responsive, accessible web applications through project-based learning.',
  },
  {
    id: 'konstfack-master',
    school: 'Konstfack, University of Arts, Crafts and Design',
    program: 'CRAFT! Textile',
    degree: 'Master of Fine Arts',
    credits: '120 HP',
    fieldOfStudy: 'Textile Art, Craft and Design',
    startDate: 'Sep 2019',
    endDate: 'Jun 2021',
    location: 'Telefonplan, Stockholm',
    description:
      'A two-year master’s program combining artistic research, craft practice, and material exploration in the field of textile art and design.',
  },
  {
    id: 'hdk-bachelor',
    school: 'HDK Steneby, University of Gothenburg',
    program: 'Textile–Clothing–Design',
    degree: 'Bachelor of Fine Arts',
    credits: '180 HP',
    fieldOfStudy: 'Textile Design',
    startDate: 'Sep 2014',
    endDate: 'Jun 2017',
    location: 'Steneby, Dals Långed',
    description:
      'A bachelor’s program focused on textile and fashion design with emphasis on form development, craftsmanship, and creative process.',
  },
  {
    id: 'steneby-textile-prep',
    school: 'Stenebyskolan',
    program: 'Art, Design, and Craft, University Preparatory Textile',
    fieldOfStudy: 'Textile and Craft',
    startDate: 'Aug 2013',
    endDate: 'Jun 2014',
    location: 'Dals Långed, Dalsland',
    description:
      'Preparatory art and design studies emphasizing hands-on work with materials and craft-based expression.',
  },
  {
    id: 'saterglantan-knitting',
    school: 'Sätergläntan Institute of Handicraft',
    program: 'Traditional Knitting',
    fieldOfStudy: 'Textile Craft',
    startDate: 'Aug 2012',
    endDate: 'Jun 2013',
    location: 'Insjön, Dalarna',
    description:
      'Full-year craft education in traditional and contemporary knitting techniques, focusing on material knowledge and design.',
  },
  {
    id: 'vrg-gymnasium',
    school: 'Viktor Rydberg Gymnasium',
    program: 'Arts Programme, Social Science Profile',
    // program:
    //   'Estetiska programmet (Arts Programme) – Samhällsvetenskaplig profil (Social Science Profile)',
    degree: 'Gymnasieexamen (Upper Secondary School Diploma)',
    fieldOfStudy: 'Bild & Form (Visual Arts)',
    startDate: 'Aug 2007',
    endDate: 'Jun 2010',
    location: 'Jarlaplan, Stockholm',
    description:
      'Upper secondary education focused on art and design, partly taught in English by native-speaking teachers.',
  },
];
