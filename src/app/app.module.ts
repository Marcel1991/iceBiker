import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeService } from './services/bike.service';
import { MenuComponent } from './menu/menu.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
