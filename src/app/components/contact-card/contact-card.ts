import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { IconBar } from '../../shared/icon-bar/icon-bar';

@Component({
  selector: 'app-contact-card',
  imports: [IconBar, NgOptimizedImage],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {}
