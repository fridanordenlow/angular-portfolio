import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../models/project.model';
import { SingleProjectComponent } from '../../components/single-project/single-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // this.projects = this.projectService.getProjects();

    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }
}
