import { Component } from '@angular/core';
import { Projects } from '../../Projects';
import { IProject } from '../../models/IProject';
import { SingleProjectComponent } from '../single-project/single-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: IProject[] = Projects;
}
