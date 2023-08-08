import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderItemComponent } from './orders/order-list/order-item/order-item.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'order', component: OrdersComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    OrderItemComponent,
    ProductsComponent,
    ProductItemComponent,
    OrderListComponent,
    ProductListComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
