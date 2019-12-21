import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User;

  authError: any;

  // import the auth service
  constructor(private auth: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  createUser() {
    //this call the createUser method from the auth service
    console.log(this.user);
    this.auth.createUser(this.user);
  }
}


