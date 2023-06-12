import { Component } from '@angular/core';

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
}
