import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';


export interface Product {
  id:number
  title:string
  author:string
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  numberOfProduct = 0

  products: Product[] = []

  newProductForm = this.formBuilder.group({
    id: 0, 
    title: '', 
    author: '' 
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reloadData()
  }

  private reloadData(): void {
    this.http.get<Product[]>('http://localhost:3000/posts').subscribe({
      next: (data) => {
        this.products = data
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  addProduct(): void {
    const newProductData = this.newProductForm.value;
    this.http.post('http://localhost:3000/posts', newProductData).subscribe({
      next: () => {
        this.reloadData(); 
        this.newProductForm.reset(); 
      },
      error: (error) => {
        console.error('Error adding product:', error);
      }
    });
  }
}