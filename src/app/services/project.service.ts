import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProject } from '../models/project.model';
import { projects } from '../data/projects.data';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  // getProjects(): IProject[] {
  //   return Projects;
  // }

  getProjects(): Observable<IProject[]> {
    const projectsObservable = of(projects);
    return projectsObservable;
  }
}
