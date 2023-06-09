import { TourService } from 'src/app/services/tour.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Tour } from 'src/app/interfaces/tour';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addtour',
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.css']
})
export class AddtourComponent {
  tour: Tour = {

    name: '', 
    img: '', 
    nametour: '',
    quantity: 0,
    price: '',
    address: '',
  };
  tours!: Tour[];

  constructor(private tourService: TourService,
    private route: Router) {}

  createTour(): void {
    this.tourService.createTour(this.tour).subscribe(
      (response) => {
        alert('ADD sản phẩm thành công!');
        this.route.navigateByUrl('/admin/tour')
      },
      (error) => {  
        console.log('An error occurred while creating tour:', error);
        // Xử lý lỗi nếu có
      }
    );
  }
}