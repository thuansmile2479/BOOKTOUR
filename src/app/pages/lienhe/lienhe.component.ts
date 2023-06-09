import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Lienhe } from 'src/app/interfaces/lienhe';
import { LienheService } from 'src/app/services/lienhe.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css']
})
export class LienheComponent {
  constructor(
    private formBuilder: FormBuilder,
    private lienheService: LienheService,
    private Router : Router
  ) {}

  lienheForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    mess: ['', Validators.required],
   
  })
  onHandleSubmit() {
    if (this.lienheForm.valid) {
      const lienhe: Lienhe = {
        name: this.lienheForm.value.name || "", 
        email: this.lienheForm.value.email || "", 
        phone: this.lienheForm.value.phone || "", 
        mess: this.lienheForm.value.mess || "", 
      }
      this.lienheService.createLienhe(lienhe).subscribe(data => {
        alert("Send contact successfully.")
        this.Router.navigateByUrl('')
        
      })

    }

  }

}