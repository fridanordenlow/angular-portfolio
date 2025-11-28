import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  techSkills = signal<string[]>([
    'Semantic & accessible HTML',
    'Modern CSS (CSS Modules, SCSS, Tailwind)',
    'UI component libraries (Material UI)',
    'JavaScript (ES6+), TypeScript',
    'React, Angular, Vue',
    'State & data management (useState, Context, Signals, Redux, Pinia)',
    'Routing (React Router, Angular Router, Vue Router)',
    'Component architecture & clean code practices',
    'Vite, npm, pnpm',
    'Node.js, Express.js',
    'REST API, SQL, NoSQL',
    'Postman, Insomnia',
    'Version control, Git',
    'UX/Usability',
    'Figma, Photoshop, InDesign',
  ]);

  softSkills = signal<string[]>([
    'Agile workflows (Scrum)',
    'Accessibility (WCAG, ARIA)',
    'Mob and pair programming',
    'User-centered thinking',
    'Communication & collaboration',
    'Self-leadership & initiative',
    'Visual presentation & design awareness',
  ]);
}
