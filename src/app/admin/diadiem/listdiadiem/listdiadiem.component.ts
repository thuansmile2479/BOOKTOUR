import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/diadiem';


@Component({
  selector: 'app-listdiadiem',
  templateUrl: './listdiadiem.component.html',
  styleUrls: ['./listdiadiem.component.css']
})
export class ListdiadiemComponent {
 

  products: any[] | undefined;
  product: any = [];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToDetail(productId: string) {
    this.router.navigate(['/products/' + productId]);
  }


  
  deleteProduct(id: number | string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getProducts();
      confirm('Bạn có chắc muốn xóa không');
    });
  } 


}
