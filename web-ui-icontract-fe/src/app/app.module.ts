import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { StoreModule} from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatInputModule
} from "@angular/material";
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractViewComponent } from './modules/contracts/views/contract-view/contract-view.component';
import { ContractApprovalComponent } from './modules/contracts/components/contract-approval/contract-approval.component';
import { RegisterComponent } from './auth/register/register.component';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ContractViewComponent,
    ContractApprovalComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
