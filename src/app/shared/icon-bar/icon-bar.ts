import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-bar',
  imports: [FontAwesomeModule],
  templateUrl: './icon-bar.html',
  styleUrl: './icon-bar.scss',
})
export class IconBar {
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
}
