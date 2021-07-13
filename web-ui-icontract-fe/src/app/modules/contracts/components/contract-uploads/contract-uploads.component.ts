import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from './dailog/dailog.component';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contract-uploads',
  templateUrl: './contract-uploads.component.html',
  styleUrls: ['./contract-uploads.component.scss']
})
export class ContractUploadsComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
  }

  public openUploadDialog(files: File[]) {
    this.basicUpload(files);
  }

  basicUpload(files: File[]){
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))
    this.http.post('https://file.io', formData)
      .subscribe(event => {
        console.log('done')
      })
  }

}
