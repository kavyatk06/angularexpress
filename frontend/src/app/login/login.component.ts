import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginResponse: string = '';
 
  constructor(private http: HttpClient, private router: Router) { }
 
  loginUser(loginFormData: any) {
    // const userid = loginFormData.value.userid;
    // const password = loginFormData.value.password;
 
    const userid = loginFormData.value.userid.trim();
    const password = loginFormData.value.password.trim();
 
 
    // Define your backend endpoint
    const endpoint = 'http://localhost:4000/login';
 
    this.http.post(endpoint, { userid, password }).subscribe(
      (response: any) => {
        if (response.message === "Login successful") {
          this.loginResponse = response.message;
 
          // Navigate to the home page on successful login
          this.router.navigateByUrl('/home'); // assuming '/home' is the route for your home page
        } else {
          // If the message is anything other than "Login successful", treat it as an error.
          this.loginResponse = response.message || "Error logging in.";
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.loginResponse = "Invalid credentials"; // You can refine this based on the actual error received
      }
    );
  }
}
 