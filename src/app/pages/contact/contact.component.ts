import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IconBar } from '../../components/shared/icon-bar/icon-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconBar, NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
