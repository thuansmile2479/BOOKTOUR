import { Component } from '@angular/core';
import { Tour } from 'src/app/interfaces/tour';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from 'src/app/services/tour.service';
@Component({
  selector: 'app-detailtour',
  templateUrl: './detailtour.component.html',
  styleUrls: ['./detailtour.component.css']
})
export class DetailtourComponent {
  tour!: Tour

  tours: any[] | undefined;
  tourForm = this.formBuilder.group({
    name: [''],
    img: [''],
    nametour: [''],
    quantity: 0,
    price: [''],
    address: [''],
  })


  constructor(
    private formBuilder: FormBuilder,
    private tourService: TourService,
    private route: ActivatedRoute,
    private Router: Router
  ){
    this.route.paramMap.subscribe(param => {
      const id: any = param.get('id')
      this.tourService.getTourById(id).subscribe(tour => {
        this.tour = tour,
        this.tourForm.patchValue({
          name: tour.name, 
          img: tour.img,
          nametour: tour.nametour,
          quantity: tour.quantity,
          price: tour.price,
          address: tour.address,
        })
      })
    })
  }
}