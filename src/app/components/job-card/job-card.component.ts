import { Component, input } from '@angular/core';
import { IJob } from '../../models/job.model';

@Component({
  selector: 'app-job-card',
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  job = input.required<IJob>();
}
