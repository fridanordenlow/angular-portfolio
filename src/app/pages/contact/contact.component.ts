import { Component, type OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageHeaderComponent, NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
