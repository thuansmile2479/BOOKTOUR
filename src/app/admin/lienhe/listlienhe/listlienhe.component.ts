import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LienheService } from 'src/app/services/lienhe.service';

@Component({
  selector: 'app-listlienhe',
  templateUrl: './listlienhe.component.html',
  styleUrls: ['./listlienhe.component.css']
})
export class ListlienheComponent {
  lienhes: any[] | undefined;
  lienhe: any = [];
  constructor(private lienheService: LienheService, private router: Router) {}

  ngOnInit() {
    this.getLienhes();
  }

  getLienhes() {
    this.lienheService.getLienhes().subscribe(
      (response) => {
        this.lienhes = response;
      },
      (error) => {
        console.log(error);
      }
    ); 
    
  }

  navigateToDetail(lienheId: string) {
    this.router.navigate(['/lienhes/' + lienheId]);
  }

  deleteLienhe(id: number | string) {
    this.lienheService.deleteLienhe(id).subscribe(() => {
      this.getLienhes();
      confirm('Bạn có chắc muốn xóa không');
    });
  } 


}

