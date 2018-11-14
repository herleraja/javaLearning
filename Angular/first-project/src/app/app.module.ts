import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { GenericUtilService } from './generic-util.service';

@NgModule({
  //To add all the Components that you use in app
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent
  ],
  //To add all the Modules that you use in app (which dose not have html and css file)
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule
  ],
  //To add all the service that you use in app
  providers: [GenericUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
