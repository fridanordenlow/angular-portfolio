import { Component, input } from '@angular/core';
import { IEducation } from '../../models/education.model';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
})
export class EducationCardComponent {
  education = input.required<IEducation>();
}
