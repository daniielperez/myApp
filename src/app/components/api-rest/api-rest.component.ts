import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { CommonModule } from '@angular/common';
import { Personaje } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css'],
  standalone: true,
  providers:[],
  imports: [HttpClientModule,CommonModule]
})

export class ApiRestComponent {
  personajes!: Personaje[]

  constructor( private apiRest : ApiRestService ){
    this.getData();
    
    // this.apiRest.getAllCharacters().subscribe((data: any) => {
    //   console.log(data);
    //   // this.personajes = data
    // });
  }

  getData() {
    this.apiRest.getDataPage().subscribe(r=>{
      this.personajes = r.personajes
    });
  } 

  filter(e:any){
    this.personajes = this.apiRest.filterData(e.target.value)
  }

  
  
}
