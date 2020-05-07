import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTestModule } from 'olofens-lib-test';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LibTestModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
