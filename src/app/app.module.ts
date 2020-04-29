import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //Import the Angular router module and Routes

import {GoogleAnalyticseService} from "./google-analyticse.service"; // import our Google Analytics service
providers: [GoogleAnalyticseService] //add it as a provider



import { AppComponent } from './app.component';
import { KiddeComponent } from './kidde/kidde.component';
import { DistributorComponent } from './distributor/distributor.component';
import { CarrierComponent } from './carrier/carrier.component';
import { UTCComponent } from './utc/utc.component';

export const appRoutes: Routes = [
  {path: '', component: KiddeComponent},
  {path: 'distributor', component: DistributorComponent},
  {path: 'carrier', component: CarrierComponent},
  {path: 'utc', component: UTCComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    KiddeComponent,
    DistributorComponent,
    CarrierComponent,
    UTCComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }