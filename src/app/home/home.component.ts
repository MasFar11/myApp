import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { service } from './view-data-model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  services : service[] = []
  
  constructor(
    private http: HttpClient) { }
    
    ngOnInit(): void {
      this.getServices()
    }
    fontSize = 4; // Anfangsgröße in rem
    
    // Verwende HostListener, um auf das Scroll-Event zu hören
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Definiere die minimale und maximale Schriftgröße
      const minFontSize = 2; // Minimum Schriftgröße in rem
      const maxFontSize = 4; // Maximum Schriftgröße in rem
      
      // Passe die Schriftgröße dynamisch an das Scrollen an
      const newFontSize = maxFontSize - scrollTop / 200;

      // Setze die Schriftgröße, aber begrenze sie auf das Minimum
      this.fontSize = Math.max(newFontSize, minFontSize);
    }

  private getServices(): void {
    this.http.get<service[]>('http://localhost:3000/services').subscribe({
      next: (data) => {
      this.services = data
      },
      error: (error) => {
      console.error(error);
      }
  });
    
  }
}
