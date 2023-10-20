import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent {
  // @Input() id: string = ''
  idString:string = ''

  @Input()
  set id(id: any) {
    this.idString = id
    // this.hero$ = this.service.getHero(heroId);
  }
}
