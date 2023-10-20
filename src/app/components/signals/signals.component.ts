import { Component, Injector, OnInit, Signal, computed, effect, inject, signal, untracked } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
  providers:[],
  standalone: true
})
export class SignalsComponent implements OnInit{
  private count: number = 1;
  public counterSignal = signal<number>(this.count)
  
  public doubleCount: Signal<number> = computed(() => this.counterSignal() * 2);
  injector = inject(Injector)
  apiRest = inject(ApiRestService)

  constructor(){

  }
  
  ngOnInit(): void {
    console.log(this.apiRest.personajesPage);
    
    effect(()=>{
      console.log('cambio',untracked(this.counterSignal))
    },{injector:this.injector})
  }

  onClick(){
    // this.counterSignal.set(0)
    this.counterSignal.update(valor=>{
      return valor+1
    })
  }

}
