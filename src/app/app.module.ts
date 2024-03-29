import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HousingListComponent],
  imports: [BrowserModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
