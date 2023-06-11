import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Bill } from 'src/app/interfaces/bill'; 
import { BillService } from 'src/app/services/bill.service';
import { Route, Router } from '@angular/router';
 

@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.css']
})
export class AddbillComponent {

  constructor(
    private formBuilder: FormBuilder,
    private billService: BillService,
    private Router : Router
  ) {}

  billForm = this.formBuilder.group({
    name: ['', Validators.required],
    nguoilon: ['', Validators.required],
    nguoibe: ['', Validators.required],
    location: ['', Validators.required],
    dateee: ['', Validators.required],
   
  })
  onHandleSubmit() {
    if (this.billForm.valid) {
      const bill: Bill = {
        name: this.billForm.value.name || "", 
        nguoilon: this.billForm.value.nguoilon || "", 
        nguoibe: this.billForm.value.nguoibe || "", 
        location: this.billForm.value.location || "", 
        dateee: this.billForm.value.dateee || "", 
      }
      this.billService.createBill(bill).subscribe(data => {
        alert("Send contact successfully.")
        this.Router.navigateByUrl('')
        
      })

    }

  }

}
