import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'src/app/services/tour.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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


  
  deleteTour(id: number | string) {
    this.tourService.deleteTour(id).subscribe(() => {
      this.getTours();
      confirm('Bạn có chắc muốn xóa không');
    });
  } 


}


