import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IProject } from '../../models/project.model';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  project = input.required<IProject>();
}
