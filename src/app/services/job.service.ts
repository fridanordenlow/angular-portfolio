import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IJob } from '../models/job.model';
import { jobs } from '../data/jobs.data';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor() {}

  getJobs(): Observable<IJob[]> {
    const jobsObservable = of(jobs);
    return jobsObservable;
  }
}
