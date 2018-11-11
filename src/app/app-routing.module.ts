import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PbHomeHeaderComponent } from './home/pb-home-header/pb-home-header.component';
import { PbSignupComponent } from './pb-signup/pb-signup.component';
import { PbLoginComponent } from './pb-login/pb-login.component';

const routes: Routes = [
    {
        path: '',
        component: PbHomeHeaderComponent
    },
    {
        path: 'signup',
        component: PbSignupComponent
    },
    {
        path: 'login',
        component: PbLoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
