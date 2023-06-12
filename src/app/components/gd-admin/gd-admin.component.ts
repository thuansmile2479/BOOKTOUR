import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gd-admin',
  templateUrl: './gd-admin.component.html',
  styleUrls: ['./gd-admin.component.css']
})
export class GdAdminComponent {
  UserName = '';
  login=false;
  ngOnInit(): void {
    var isLogin = localStorage.getItem('user') as string;
      var user = JSON.parse(isLogin);
      console.log(user);
      
      if(user) {
        this.login = true;
        this.UserName = user.user.name;
      }

      console.log(this.UserName);
      
  }
  constructor(private router: Router ) {
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/')
  }
}
