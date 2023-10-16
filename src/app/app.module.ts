import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignalsComponent } from './components/signals/signals.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { InputBindingComponent } from './components/input-binding/input-binding.component';
import { HerenciaComponent } from './components/herencia/herencia.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsComponent,
    NoFoundComponent,
    InputBindingComponent,
    HerenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
