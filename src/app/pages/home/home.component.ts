import { NgOptimizedImage } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { IconBar } from '../../components/shared/icon-bar/icon-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconBar, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
