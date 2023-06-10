import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/diadiem';

@Component({
  selector: 'app-editdiadiem',
  templateUrl: './editdiadiem.component.html',
  styleUrls: ['./editdiadiem.component.css']
})
export class EditdiadiemComponent {
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

  

  onHandleEdit(){
    if(this.productForm.valid){
      const product : IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        mess: this.productForm.value.mess || "",
        messmain: this.productForm.value.messmain || "",
        img: this.productForm.value.img || "",
      }
      this.productService.updateProduct(product).subscribe(data => {
        alert("Update product successfully.")
        this.Router.navigateByUrl('/admin/locations')
      })
    }
    
  }
}
