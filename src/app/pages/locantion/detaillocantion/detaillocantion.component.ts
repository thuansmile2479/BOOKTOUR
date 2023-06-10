import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/diadiem';

@Component({
  selector: 'app-detaillocantion',
  templateUrl: './detaillocantion.component.html',
  styleUrls: ['./detaillocantion.component.css']
})
export class DetaillocantionComponent {
  product!: IProduct
  productForm = this.formBuilder.group({
    name: [''],
    img: [''],
    mess: [""],
    messmain: [""],
  })


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private Router: Router
  ){
    this.route.paramMap.subscribe(param => {
      const id: any = param.get('id')
      this.productService.getProductById(id).subscribe(product => {
        this.product = product,
        this.productForm.patchValue({
          name: product.name,
          mess: product.mess,
          messmain: product.messmain,
          img: product.img,
        })
      })
    })
  }

}
