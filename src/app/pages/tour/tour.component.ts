import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'src/app/services/tour.service'; 


@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent {

  tours: any[] | undefined;
  tour: any = [];
  constructor(private tourService: TourService, private router: Router) {}

  ngOnInit() {
    this.getTours();
  }

  getTours() {
    this.tourService.getTours().subscribe(
      (response) => {
        this.tours = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToDetail(tourId: string) {
    this.router.navigate(['/tours/' + tourId]);
  }



}

