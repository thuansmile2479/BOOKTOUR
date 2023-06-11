import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-billadmin',
  templateUrl: './billadmin.component.html',
  styleUrls: ['./billadmin.component.css']
})
export class BilladminComponent {

  bills: any[] | undefined;
  bill: any = [];
  constructor(private billService: BillService, private router: Router) {}

  ngOnInit() {
    this.getBills();
  }

  getBills() {
    this.billService.getBills().subscribe(
      (response) => {
        this.bills = response;
      },
      (error) => {
        console.log(error);
      }
    ); 
    
  }

  navigateToDetail(billId: string) {
    this.router.navigate(['/bills/' + billId]);
  }

  deleteBill(id: number | string) {
    this.billService.deleteBill(id).subscribe(() => {
      this.getBills();
      confirm('Bạn có chắc muốn xóa không');
    });
  } 


}