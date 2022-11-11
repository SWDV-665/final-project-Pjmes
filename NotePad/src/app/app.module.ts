import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { AddNotePage } from './add-note/add-note.page';

@NgModule({
  declarations: [AppComponent, HomePage, AddNotePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AddNotePage, HomePage],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent, AddNotePage],
})
export class AppModule {}
