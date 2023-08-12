import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'myApp';
  
  navigateToProductPage() {
    this.router.navigate(['/product']); 
  }

  navigateToOrderPage() {
    this.router.navigate(['/order']); 
  }
  navigateToHomePage() {
    this.router.navigate(['/home']); 
  }
}