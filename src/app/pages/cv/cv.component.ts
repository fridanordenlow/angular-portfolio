import {
  Component,
  OnDestroy,
  signal,
  WritableSignal,
  type OnInit,
} from '@angular/core';
import { IEducation } from '../../models/education.model';
import { EducationService } from '../../services/education.service';
import { EducationCardComponent } from '../../components/education-card/education-card.component';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { IJob } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cv',
  imports: [PageHeaderComponent, EducationCardComponent, JobCardComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent implements OnInit, OnDestroy {
  educationSignal: WritableSignal<IEducation[]> = signal([]);
  jobSignal: WritableSignal<IJob[]> = signal([]);
  subscribe = new Subscription();

  constructor(
    private educationService: EducationService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.subscribe.add(
      this.educationService.getEducation().subscribe((education) => {
        this.educationSignal.set(education);
      })
    );

    this.subscribe.add(
      this.jobService.getJobs().subscribe((jobs) => {
        this.jobSignal.set(jobs);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
