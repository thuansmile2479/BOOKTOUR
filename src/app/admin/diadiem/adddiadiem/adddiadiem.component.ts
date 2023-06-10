import { ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/diadiem';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adddiadiem',
  templateUrl: './adddiadiem.component.html',
  styleUrls: ['./adddiadiem.component.css']
})

export class AdddiadiemComponent {
  product: IProduct = {

    name: '', 
    img: '',
    mess: '',
    messmain: '',

  };
  products!: IProduct[];

  constructor(private productService: ProductService,
    private route: Router) {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      (response) => {
        alert('ADD sản phẩm thành công!');
        this.route.navigateByUrl('/admin/locations')
      },
      (error) => {  
        console.log('An error occurred while creating product:', error);
        // Xử lý lỗi nếu có
      }
    );
  }
}
