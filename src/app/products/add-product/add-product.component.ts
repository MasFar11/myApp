import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) { }

  productForm = this.formBuilder.group({
    id: 0, 
    title: '', 
    price: ''  
  });

  addProduct(): void {
    const newProductData = this.productForm.value;
    this.http.post('http://localhost:3000/products', newProductData).subscribe({
      next: () => {
        this.productForm.reset(); 
      },
      error: (error) => {
        console.error('Error adding product:', error);
      }
    });
  }

}
