import { Component, input } from '@angular/core';
import { IProject } from '../../models/IProject';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  project = input<IProject>();
}
