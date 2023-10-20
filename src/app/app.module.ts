import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignalsComponent } from './components/signals/signals.component';
import { AppRoutingModule } from './app-routing.module';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { InputBindingComponent } from './components/input-binding/input-binding.component';
import { HerenciaComponent } from './components/herencia/herencia.component';
import { FormsComponent } from './components/forms/forms.component';
import { ApiRestComponent } from './components/api-rest/api-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    NoFoundComponent,
    InputBindingComponent,
    HerenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignalsComponent,
    FormsComponent,
    ApiRestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
