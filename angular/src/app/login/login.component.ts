import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  error: boolean = false;
  invalid: boolean = false;

  constructor(private common: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.error = false;
    if(this.validate()) {
      this.invalid = false;
    } else {
      this.invalid = true;
      return;
    }
    this.common.login(this.email, this.password)
    .then(() => {
      this.password = ''
      this.email = ''
      this.router.navigate(['connect']);
    }).catch(() => {
      this.error = true;
    })
  }

  validate() {
    if(this.password.length < 2) {
      return false;
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const exp = new RegExp(regex);
    if(exp.test(this.email)) {
      return true;
    } else {
      return false;
    }
  }

}
