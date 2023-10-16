import { Component, Injector, OnInit, Signal, WritableSignal, computed, effect, signal, untracked } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
  
  }
  
  title = 'MyApp';
}
