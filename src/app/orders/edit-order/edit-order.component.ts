import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { order } from '../order-list/order-list.component';
import { ActivatedRoute, Router } from '@angular/router';


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

  orderId?: number;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute){}
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        const orderId = +params['id'];
        if (orderId) {
          this.loadOrderByID(orderId);
        }
      });
    }
  
    private loadOrderByID(id: number): void {
      this.http.get<order>(`http://localhost:3000/orders/${id}`).subscribe({
        next: (data) => {
          this.orderId = data.id;
          this.orderForm.patchValue(data); 
        },
          error: (error) => {
          console.error(error);
          }
      });
  }

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
