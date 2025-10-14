import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IProject } from '../../models/IProject';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  project = input.required<IProject>();
}
