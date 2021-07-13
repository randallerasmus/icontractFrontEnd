import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContractViewComponent} from "./modules/contracts/views/contract-view/contract-view.component";
import {RegisterComponent} from "./auth/register/register.component";



const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path :'login',component: LoginComponent
  },
  {
    path :'dashboard',component: DashboardComponent
  },
  {
    path :'contract-view',component: ContractViewComponent
  },
  {
    path :'register',component: RegisterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
