import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEducation } from '../models/education.model';
import { education } from '../data/education.data';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor() {}

  getEducation(): Observable<IEducation[]> {
    const educationObservable = of(education);
    return educationObservable;
  }
}
