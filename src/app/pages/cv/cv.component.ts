import { Component, signal, WritableSignal, type OnInit } from '@angular/core';
import { IEducation } from '../../models/education.model';
import { EducationService } from '../../services/education.service';
import { EducationCardComponent } from '../../components/education-card/education-card.component';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { IJob } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-cv',
  imports: [EducationCardComponent, JobCardComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent implements OnInit {
  educationSignal: WritableSignal<IEducation[]> = signal([]);
  jobSignal: WritableSignal<IJob[]> = signal([]);

  constructor(
    private educationService: EducationService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe((education) => {
      this.educationSignal.set(education);
    });

    this.jobService.getJobs().subscribe((jobs) => {
      this.jobSignal.set(jobs);
    });
  }
}
