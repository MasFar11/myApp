  import { HttpClient } from "@angular/common/http";
  import { Component } from "@angular/core";
  import { FormBuilder } from "@angular/forms";

  export interface order {
      id:number
      title:string
      name:string
  }

  @Component({
      selector: 'app-order-list',
      templateUrl: './order-list.component.html',
      styleUrls: ['./order-list.component.scss']
  })

  export class OrderListComponent {
      orders: order[] = []
      
      orderForm = this.formBuilder.group({
          id: 0, 
          title: '', 
          name: '' 
      });

      constructor(
          private http: HttpClient,
          private formBuilder: FormBuilder) { }
      
      ngOnInit(): void {
      this.reloadData()
      }

      private reloadData(): void {
      this.http.get<order[]>('http://localhost:3000/orders').subscribe({
          next: (data) => {
          this.orders = data
          },
          error: (error) => {
          console.error(error);
          }
      });
      }

      addOrder(): void {
      const neworderData = this.orderForm.value;
      this.http.post('http://localhost:3000/orders', neworderData).subscribe({
          next: () => {
          this.reloadData(); 
          this.orderForm.reset(); 
          },
          error: (error) => {
          console.error('Error adding order:', error);
          }
      });
      }

      deleteOrder(): void {
      const deleteOrderId = this.orderForm.value.id;
      this.http.delete(`http://localhost:3000/orders/${deleteOrderId}`).subscribe({
          next: () => {
          this.reloadData(); 
          this.orderForm.reset();
          },
          error: (error) => {
          console.error('Error adding order:', error);
          }
      });
      }

      editOrder(): void {
      const editorderData = this.orderForm.value;
      const editorderId = editorderData.id;
      delete editorderData.id;

      this.http.patch(`http://localhost:3000/orders/${editorderId}`, editorderData).subscribe({
          next: () => {
          this.reloadData();
          this.orderForm.reset();
          },
          error: (error) => {
          console.error('Error editing order:', error);
          }
      });
      }
      }