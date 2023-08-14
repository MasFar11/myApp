import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

export interface order {
    id:number
    price:string
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
        name: '',
        price: '', 
    });

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
        private router: Router) { }
    
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

    deleteOrder(id: number): void {
        //const deleteOrderId = this.orderForm.value.id;
        this.http.delete(`http://localhost:3000/orders/${id}`).subscribe({
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

    navigateToEditOrder() :void {
        this.router.navigate(['order/edit-order']);
    }

    navigateToAddOrder() :void {
        this.router.navigate(['order/add-order']);
    }
}