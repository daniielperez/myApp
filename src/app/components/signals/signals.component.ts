import { Component, Injector, OnInit, Signal, computed, effect, inject, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements OnInit{
  private count: number = 1;
  public counterSignal = signal<number>(this.count)

  public doubleCount: Signal<number> = computed(() => this.counterSignal() * 2);
  injector = inject(Injector)
  constructor(){

  }
  ngOnInit(): void {
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
