import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IProject } from '../../models/project.model';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  project = input.required<IProject>();
}
