import { Component, input } from '@angular/core';
// import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';

interface NavLink {
  path: string;
  label: string;
  exact?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink],
  // imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = input.required<string>();

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  links: NavLink[] = [
    { path: '/', label: 'Home', exact: true },
    { path: 'projects', label: 'Projects' },
    { path: 'cv', label: 'CV' },
    { path: 'contact', label: 'Contact' },
  ];
}
