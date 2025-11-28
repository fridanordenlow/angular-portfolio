import { Component, input, type OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  text = input.required<string>();
  link = input<string>();
  type = input<'button'>('button');
  styleClass = input<string>();

  openLink() {
    if (this.link()) {
      window.open(this.link());
    }
  }

  ngOnInit(): void {}
}
