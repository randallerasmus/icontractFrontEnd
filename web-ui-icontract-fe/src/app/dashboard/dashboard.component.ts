import { Component, OnInit,} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
 })

export class DashboardComponent implements OnInit {
  filterResults: any;


 constructor(private _httpClient: HttpClient) {}

 ngOnInit(): void{

 }

  onKeyTextFilter($event: any) {

  }
}


