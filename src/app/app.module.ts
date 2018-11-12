import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PbHomeHeaderComponent} from './home/pb-home-header/pb-home-header.component';
import {PbLogoComponent} from './pb-logo/pb-logo.component';
import {PbLoginComponent} from './pb-login/pb-login.component';
import {PbSignupComponent} from './pb-signup/pb-signup.component';
import {PbHeaderComponent} from './home/pb-header/pb-header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        PbHomeHeaderComponent,
        PbLogoComponent,
        PbLoginComponent,
        PbSignupComponent,
        PbHeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
