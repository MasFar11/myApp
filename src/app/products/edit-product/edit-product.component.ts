import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder){}

  productForm = this.formBuilder.group({
    id: 0, 
    title: '', 
    price: ''  
  });

  editProduct(): void {
    const editProductData = this.productForm.value;
    const editProductId = editProductData.id;
    delete editProductData.id;

    this.http.patch(`http://localhost:3000/products/${editProductId}`, editProductData).subscribe({
      next: () => {
        this.productForm.reset();
      },
      error: (error) => {
        console.error('Error editing product:', error);
      }
    });
  }
}
