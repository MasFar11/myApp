import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export interface order {
  id:number
  title:string
  name:string
}

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent {
  orders: order[] = []
      
  orderForm = this.formBuilder.group({
      id: 0, 
      name: '', 
      price: '' 
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) { }
  
  addOrder(): void {
    const neworderData = this.orderForm.value;
    this.http.post('http://localhost:3000/orders', neworderData).subscribe({
        next: () => {
        this.orderForm.reset(); 
        },
        error: (error) => {
        console.error('Error adding order:', error);
        }
    });
  }

}
