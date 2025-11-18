import { NgOptimizedImage } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  imports: [NgOptimizedImage],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {}
