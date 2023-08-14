import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { order } from '../order-list/order-list.component';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent {
  orders: order[] = []
    
  orderForm = this.formBuilder.group({
      id: 0, 
      name: '',
      price: '', 
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder){}

  editOrder(): void {
    const editorderData = this.orderForm.value;
    const editorderId = editorderData.id;
    delete editorderData.id;

    this.http.patch(`http://localhost:3000/orders/${editorderId}`, editorderData).subscribe({
        next: () => {
        this.orderForm.reset();
        },
        error: (error) => {
        console.error('Error editing order:', error);
        }
    });
}

}
