import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private authService: AuthServiceService, private route: Router) {
  }

  authForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  onSubmit() {
    const data = this.authForm.value;
    this.authService.signIn(data).subscribe((ressponse) => {
      const user = {
        accessToken: ressponse.accessToken,
        user: ressponse.user
      }
      
      localStorage.setItem(
        'user',
        JSON.stringify(user)
      );
      if(ressponse.user.role == 'admin') {
        this.route.navigateByUrl('/admin/dashboard')
      } else {
        this.route.navigateByUrl('/');
      }
      
    }, error => {
      alert(error.error.message)
      
    })
    
    
  }
}