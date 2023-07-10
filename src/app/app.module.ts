import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
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
