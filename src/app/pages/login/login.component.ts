import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private http: HttpClient , private router: Router) { }
  // tslint:disable-next-line:semicolon
  public loginForm!: FormGroup
  ngOnInit(): void {
      this.loginForm = this. formBuilder.group ({
      email: [''],
      password: ['']
      // tslint:disable-next-line:semicolon
      })
    }
  login()
  {
  // tslint:disable-next-line:quotemark
  this.http.get<any>("http://localhost:3000/posts")
  .subscribe(res => {
    const user = res.find((a: any) => {
      // tslint:disable-next-line:semicolon
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password });
    if ( user) {
      // tslint:disable-next-line:quotemark
      alert("Login  SuccessFull");
      this.loginForm.reset();
      this.router.navigate(['home']);
    }else {
      // tslint:disable-next-line:quotemark
      alert("User not Found");
    }
  // tslint:disable-next-line:semicolon
  // tslint:disable-next-line:align
  }, err => {
    // tslint:disable-next-line:quotemark
    alert("Something went wrong");
  // tslint:disable-next-line:semicolon
  });
  // tslint:disable-next-line:eofline
  // tslint:disable-next-line:semicolon
  }
  }
