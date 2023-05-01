import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule }  from '@angular/forms';
import { loginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: loginComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
