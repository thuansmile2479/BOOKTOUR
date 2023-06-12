import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit {
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
  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      var isLogin = localStorage.getItem('user');
      console.log(isLogin);
      
      // if(isLogin) {
      //   this.UserName = JSON.stringify(isLogin)
      // }
    }
  }

  constructor(private router: Router ) {
  }

  logout() {
    localStorage.removeItem('user');
    // this.router.navigateByUrl('/')
  }
}
