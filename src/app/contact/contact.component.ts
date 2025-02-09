import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  onSubmit() {
    // Hier kannst du die Formular-Daten verarbeiten oder an einen Backend-Service senden
    alert('Thank you for contacting us!');
  }
  
}
