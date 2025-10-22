import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../models/project.model';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { Subscription } from 'rxjs';
// import { BehaviorSubject } from 'rxjs'; // subject

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  // projectSubject = new BehaviorSubject<IProject[]>([]); // subject
  // projects$ = this.projectSubject.asObservable(); // subject

  projectSignal: WritableSignal<IProject[]> = signal([]);
  subscription = new Subscription();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.projectService.getProjects().subscribe((projects) => {
        // this.projectSubject.next(projects); // subject
        this.projectSignal.set(projects);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
