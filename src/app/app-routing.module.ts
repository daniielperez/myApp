import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { InputBindingComponent } from './components/input-binding/input-binding.component';
import { AppComponent } from './app.component';
import { HerenciaComponent } from './components/herencia/herencia.component';

const appRoutes: Routes = [
  { path:'signals',component:SignalsComponent },
  { path:'herencia',component:HerenciaComponent },
  { path:'input/:id',component:InputBindingComponent },
  { path: '', redirectTo: '/herencia', pathMatch: 'full' },

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
