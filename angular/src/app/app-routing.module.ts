import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'connect',
    component: ConnectComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
