import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';


export interface Product {
  id:number
  title:string
  price:number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = []

  productForm = this.formBuilder.group({
    id: 0, 
    title: '', 
    price: ''  
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reloadData()
  }

  private reloadData(): void {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe({
      next: (data) => {
        this.products = data
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  addProduct(): void {
    const newProductData = this.productForm.value;
    this.http.post('http://localhost:3000/products', newProductData).subscribe({
      next: () => {
        this.reloadData(); 
        this.productForm.reset(); 
      },
      error: (error) => {
        console.error('Error adding product:', error);
      }
    });
  }

  deleteProduct(): void {
    const deleteProductId = this.productForm.value.id;
    this.http.delete(`http://localhost:3000/products/${deleteProductId}`).subscribe({
      next: () => {
        this.reloadData(); 
        this.productForm.reset();
      },
      error: (error) => {
        console.error('Error adding product:', error);
      }
    });
  }

  editProduct(): void {
    const editProductData = this.productForm.value;
    const editProductId = editProductData.id;
    delete editProductData.id;

    this.http.patch(`http://localhost:3000/products/${editProductId}`, editProductData).subscribe({
      next: () => {
        this.reloadData();
        this.productForm.reset();
      },
      error: (error) => {
        console.error('Error editing product:', error);
      }
    });
  }
}