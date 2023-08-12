import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links = ['Product', 'order', 'other'];
  activeLink = this.links[1];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}