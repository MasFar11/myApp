import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  productId?: number;
  products: Product[] = []

  productForm = this.formBuilder.group({
    id: 0, 
    title: '', 
    price: ''  
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      if (productId) {
        this.loadProductByID(productId);
      }
    });
  }

 private loadProductByID(id: number): void {
      this.http.get<Product>(`http://localhost:3000/products/${id}`).subscribe({
        next: (data) => {
          this.productId = data.id;
          this.productForm.patchValue(data); // Setzen Sie die Formularwerte auf die geladenen Werte
        },
          error: (error) => {
          console.error(error);
          }
      });
  }

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
