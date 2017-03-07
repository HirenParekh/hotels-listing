import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {HotelsPageComponent} from "./hotels/components/hotels-page.component";
import {HotelService} from "./hotels/services/hotel.service";
import {HotelListComponent} from "./hotels/components/hotel-list/hotel-list.component";
import {HotelComponent} from "./hotels/components/hotel/hotel.component";

@NgModule({
  declarations: [
    AppComponent,
    HotelsPageComponent,
    HotelListComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
