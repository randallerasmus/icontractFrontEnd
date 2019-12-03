import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContractViewComponent} from "./modules/contracts/views/contract-view/contract-view.component";



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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
