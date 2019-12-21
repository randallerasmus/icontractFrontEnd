import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailogComponent } from './dailog/dailog.component';
import {MatDialogModule, MatListModule, MatProgressBarModule} from "@angular/material";


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
