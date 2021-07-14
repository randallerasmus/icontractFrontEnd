import { OnInit, Directive } from "@angular/core";

@Directive()
export class User implements OnInit {

  name: string;
  lastName: string;
  password: string;
  email: string;

  constructor() {
  }


  ngOnInit(): void {
  }




}
