import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authError: any;

  user: firebase.User;

  constructor(private auth: AuthService,
              private router: Router) { }


  ngOnInit() {

    console.log(this.user,'first');

    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });

    this.auth.getUserState().subscribe( user =>{
        this.user = user;

    })
  }

  SignIn(user) {
    console.log(user);
    this.auth.login(user.value.email, user.value.password);
    this.router.navigate(['/dashboard']);
  }

  Logout() {
    this.auth.logout();
  }
}
