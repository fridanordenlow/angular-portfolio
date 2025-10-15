import { Component, type OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {}
}
