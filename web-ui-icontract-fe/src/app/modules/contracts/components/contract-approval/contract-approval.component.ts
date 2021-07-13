import { Component, OnInit } from '@angular/core';
import {UploadService} from "../contract-uploads/upload.service";
import { MatDialog } from "@angular/material/dialog";
import {DailogComponent} from "../contract-uploads/dailog/dailog.component";

@Component({
  selector: 'app-contract-approval',
  templateUrl: './contract-approval.component.html',
  styleUrls: ['./contract-approval.component.scss']
})
export class ContractApprovalComponent implements OnInit {

  constructor(public dialog: MatDialog, public uploadService: UploadService) {}

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DailogComponent, {
      width: '50%',
      height: '50%',
    })
  }

  ngOnInit(): void {
  }
}
