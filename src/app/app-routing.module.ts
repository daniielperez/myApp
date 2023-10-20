import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { InputBindingComponent } from './components/input-binding/input-binding.component';
import { HerenciaComponent } from './components/herencia/herencia.component';
import { FormsComponent } from './components/forms/forms.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { ApiRestComponent } from './components/api-rest/api-rest.component';

const appRoutes: Routes = [
  { path:'signals',component:SignalsComponent },
  { path:'herencia',component:HerenciaComponent },
  { path:'api-rest',component:ApiRestComponent },
  //pasar obj por la ruta
  { path:'input/:id',component:InputBindingComponent },
  { path:'form',component:FormsComponent },
  { path: '', redirectTo: '/api-rest', pathMatch: 'full' },
  { path: '**', component:NoFoundComponent },

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [
    provideRouter(appRoutes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
