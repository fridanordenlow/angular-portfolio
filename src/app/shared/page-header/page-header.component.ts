import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  pageTitle = input.required<string>();
}
