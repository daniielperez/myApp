import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Personaje } from '../interfaces/personaje';


@Injectable({
  providedIn:'root'
})

export class ApiRestService {
  apiUrl:string = 'https://rickandmortyapi.com/api/character'
  personajesPage!:Personaje[]
  constructor(private http: HttpClient) { }

   getDataPage():Observable<{personajes:Personaje[],info:any}>{
      return this.http.get<{ results: Personaje[],info:{} }>(this.apiUrl).pipe(
        map(data => {
          // this.personajesPage = data.results
          return { personajes:data.results,info:data.info }
        })
      )
  }

  filterData(search:string){
    return this.personajesPage.filter(({name}: Personaje) => {
      return name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }

  getAllCharacters() {
    const pagesToLoad = 42; // A partir de septiembre de 2021, hay 34 páginas de personajes
    const requests = [];

    for (let page = 1; page <= pagesToLoad; page++) {
      requests.push(this.http.get(`${this.apiUrl}?page=${page}`));
    }

    return forkJoin(requests).pipe(
      map((data: any[]) => {
        this.personajesPage = data.flatMap(page => page.results);
        return this.personajesPage
      })
    )
  }
}
