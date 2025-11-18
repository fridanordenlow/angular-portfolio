import { Component, type OnInit } from '@angular/core';
import { ContactCard } from '../../components/contact-card/contact-card';
// import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactCard],
  // imports: [NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
