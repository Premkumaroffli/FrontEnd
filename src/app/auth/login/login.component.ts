import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm!: FormGroup ;
  status  = true;

  constructor(
    // public myForm: FormGroup,
    private fb: FormBuilder,
    private authService: AuthService,
    private router : Router
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  user :any;
  onSubmit() { 
    this.authService.login('api/login', this.myForm.value).subscribe(response => {
      if (response.status === 'success') {
        this.user = response.data.user_type;
        alert(response.message);
        // Successful login logic, redirect or show success message
        console.log('Login successful');
        localStorage.setItem('LoginToken',response.data.token);
        if(this.user === 'admin')
        {
          this.router.navigate(['/adminlist']);
        }
        else
        {
          this.router.navigate(['/listpage']);
        }
        console.log('Login successful');
      } 
      
      else {
        // Failed login logic, show error message
        console.log('Login failed');
        alert(response.message)
        this.status = false;
      }
    });
  }
}
