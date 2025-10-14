import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProject } from '../models/IProject';
import { Projects } from '../Projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  // getProjects(): IProject[] {
  //   return Projects;
  // }

  getProjects(): Observable<IProject[]> {
    const projectsObservable = of(Projects);
    return projectsObservable;
  }
}
