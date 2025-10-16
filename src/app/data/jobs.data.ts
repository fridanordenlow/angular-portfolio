import { IJob } from '../models/job.model';

export const jobs: IJob[] = [
  {
    id: 'iittala',
    company: 'Iittala Outlet Gustavsberg',
    position:
      'Sales & Visual Merchandising (Butikssäljare & Visual Merchandising-ansvarig)',
    startDate: 'Aug 2022',
    endDate: 'Present',
    location: 'Gustavsberg, Värmdö',
    description:
      'Trained in the company sales concept “Passion for Selling”. Provided personal service and customer guidance. Responsible for visual presentation, sales optimization, product ordering, price communication, and more.',
  },
  {
    id: 'litet-nystan',
    company: 'Litet nystan',
    position: 'Sales & Customer Advisor (Butikssäljare & Kundrådgivare)',
    startDate: 'Oct 2019',
    endDate: 'Aug 2022',
    location: 'Södermalm, Stockholm',
    description:
      'Stockholm’s leading yarn shop. Responsibilities included sales, advising customers on knitting, color, and design, managing deliveries and orders, invoicing, customer service, and stock ordering.',
  },
  {
    id: 'ma-baker',
    company: 'MA Baker, AB Geten',
    position:
      'Kitchen, Serving & Cashier Staff (Kök-, serverings- & kassapersonal)',
    startDate: 'Dec 2017',
    endDate: 'Oct 2019',
    location: 'Kärrtorp, Stockholm',
    description:
      'Worked in kitchen, serving, and cashier roles, providing customer service and supporting daily operations.',
  },
  {
    id: 'dalslands-kanal',
    company: 'Dalslands Kanal AB',
    position: 'Lock Operator Assistant (Slussvaktsbiträde)',
    startDate: 'Summer 2016',
    endDate: 'Summer 2016',
    location: 'Billingsfors, Dalsland',
    description:
      'Assisted with lock operations during the summer season at Dalslands Canal.',
  },
];
