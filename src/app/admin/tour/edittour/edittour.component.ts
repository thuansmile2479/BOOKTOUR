import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from 'src/app/interfaces/tour';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-edittour',
  templateUrl: './edittour.component.html',
  styleUrls: ['./edittour.component.css']
})
export class EdittourComponent {
  tour!: Tour
  tourForm = this.formBuilder.group({
    name: [''],
    img: [''],
    nametour:[''],
    price:[''],
    quantity:0,
    address:[''],
  })


  constructor(
    private formBuilder: FormBuilder,
    private tourService: TourService,
    private route: ActivatedRoute,
    private Router: Router
  ){
    this.route.paramMap.subscribe(param => {
      const id: any = param.get('id')
      this.tourService.getTourById(id).subscribe( tour => {
        this.tour = tour,
        this.tourForm.patchValue({
          name:tour.name,
          img: tour.img,
          nametour:tour.nametour,
          quantity:tour.quantity,
          price:tour.price,
          address:tour.address

        })
      })
    })
  }



  onHandleEdit(){
    if(this.tourForm.valid){
      const tour : Tour = {
        _id: this.tour._id,
        name: this.tourForm.value.name || "",
        img: this.tourForm.value.img || "",
        nametour: this.tourForm.value.nametour || "",
        quantity: this.tourForm.value.quantity || 0,
        price: this.tourForm.value.price || "",
        address: this.tourForm.value.address || "",
      }
      this.tourService.updateTour(tour).subscribe( data => {
        alert("Update tour successfully.")
        this.Router.navigateByUrl('/admin/tour')
      })
    }

  }
}
