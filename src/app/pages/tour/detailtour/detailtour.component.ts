import { Component } from '@angular/core';
import { Tour } from 'src/app/interfaces/tour';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from 'src/app/services/tour.service';
import { Bill } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill.service';

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
    private billService: BillService,
    private route: ActivatedRoute,
    private router: Router,
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

      // this.router.navigate(['/tour/addbill'])
    })
  }

  

  // user: any
  // cart!: any;
    

  // ngOnInit(): void {
  //   this.tourService.getTours().subscribe((data) => {
  //    this.tours = data
  //   })
  //   this.user = JSON.parse(String(localStorage.getItem('user')));

  // }

  // logout() {
  //   localStorage.removeItem('user');
  //   this.Router.navigateByUrl('/login')
  // }

  // addToCart(tour: any) {
  //   // Neu trong localStorage co cart thi lay ra va gan vao bien cart khong thi gan bang 1 mang rong
  //   this.cart = JSON.parse(String(localStorage.getItem('cart'))) || [];

  //   // Neu nguoi dung chua dang nhap thi chuyen huong sang trang login
  //   if(!this.user) {
  //     alert("Vui long dang nhap!");
  //     this.Router.navigateByUrl('/login');
  //     return;
  //   }
  //   // Neu gio hang da co phan tu
  //   if(this.cart.length > 0) {
  //     let checkItem = false;      
  //     let checkUser = false;

  //     this.cart.forEach((cart: any, i: number) => {
  //       // Check xem nguoi dung dang dang nhap da co san pham nao trong gio hang hay chua
  //       if(this.user.user._id === cart.userId) {       
  //         checkUser = true; 
  //         // Check xem trong gio hang da co san pham do hay chua
  //         cart.items.forEach((item: any, j: number) => {
  //           if(item._id === tour._id) {
  //             // Neu trong gio hang da ton tai san pham thi cap nhap so luon len 1
  //             checkItem = true;
  //             item.quantity  += 1;
  //             this.cart[i].items[j] = item;
  //           }      
  //         })
  //         // Khong thi push san pham vao id nguoi dung tuong ung
  //         if(!checkItem) {
  //           this.cart[i].items.push({...tour, quantity: 1})
  //         }
          
  //       }
  //     });
  //     if(!checkUser) {
  //       this.cart.push({
  //         userId: this.user.user._id,
  //         items: [{...tour, quantity: 1}]
  //       })
  //     }
  //     localStorage.setItem('cart', JSON.stringify(this.cart))  
  //   } else {
  //     // Gio hang khong co phan tu nao thi push san pham vao gio hang
  //     this.cart.push({
  //       userId: this.user.user._id,
  //       items: [{...tour, quantity: 1}]
  //     })
    
  //     localStorage.setItem('cart', JSON.stringify(this.cart))
  //   }
    
  // }




  

 
}