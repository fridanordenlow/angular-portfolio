import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../models/project.model';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
// import { BehaviorSubject } from 'rxjs'; // subject

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  // projectSubject = new BehaviorSubject<IProject[]>([]); // subject
  // projects$ = this.projectSubject.asObservable(); // subject

  projectSignal: WritableSignal<IProject[]> = signal([]);

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      // this.projectSubject.next(projects); // subject
      this.projectSignal.set(projects);
    });
  }
}
