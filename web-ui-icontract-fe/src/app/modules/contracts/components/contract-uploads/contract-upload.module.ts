import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailogComponent } from './dailog/dailog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";


@NgModule({
  declarations: [DailogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule
  ],

})
export class ContractUploadModule { }
