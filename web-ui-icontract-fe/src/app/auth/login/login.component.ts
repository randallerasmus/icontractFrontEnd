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

  signIn(user) {
    console.log('SignIn')
    this.auth.login(user.value.email, user.value.password);
    this.router.navigate(['/dashboard']);
  }

  register(user){
    console.log('register')
  }

  logout() {
    console.log('logout')
    this.auth.logout();
  }
}
