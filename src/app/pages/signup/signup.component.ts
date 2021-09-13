import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

// tslint:disable-next-line:typedef-whitespace
constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: []
    });
  }
signup()
{
  // tslint:disable-next-line:quotemark
  this.http.post<any>("http://localhost:3000/posts", this.signupForm.value)
// tslint:disable-next-line:align
.subscribe(res => {
  // tslint:disable-next-line:quotemark
  alert("signup Successfull");
  this.signupForm.reset();
  this.router.navigate(['login']);
// tslint:disable-next-line:whitespace
},err=>{
  // tslint:disable-next-line:quotemark
  alert("Something went wrong");
});
}
// tslint:disable-next-line:eofline
}