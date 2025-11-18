import {
  Component,
  OnDestroy,
  signal,
  WritableSignal,
  type OnInit,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IEducation } from '../../models/education.model';
import { EducationService } from '../../services/education.service';
import { EducationCardComponent } from '../../components/education-card/education-card.component';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { IJob } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { Subscription } from 'rxjs';
import { ContactCard } from '../../components/contact-card/contact-card';

@Component({
  selector: 'app-cv',
  imports: [
    ContactCard,
    EducationCardComponent,
    JobCardComponent,
    NgOptimizedImage,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent implements OnInit, OnDestroy {
  educationSignal: WritableSignal<IEducation[]> = signal([]);
  jobSignal: WritableSignal<IJob[]> = signal([]);
  subscription = new Subscription();

  constructor(
    private educationService: EducationService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.educationService.getEducation().subscribe((education) => {
        this.educationSignal.set(education);
      })
    );

    this.subscription.add(
      this.jobService.getJobs().subscribe((jobs) => {
        this.jobSignal.set(jobs);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
