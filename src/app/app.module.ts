import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PbHomeHeaderComponent } from './pb-home-header/pb-home-header.component';
import { PbLogoComponent } from './pb-logo/pb-logo.component';
import { PbLoginComponent } from './pb-login/pb-login.component';
import { PbSignupComponent } from './pb-signup/pb-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PbHomeHeaderComponent,
    PbLogoComponent,
    PbLoginComponent,
    PbSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
