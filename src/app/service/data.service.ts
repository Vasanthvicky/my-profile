import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  // Get Pokemons
  getPokemonApi(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  // Get More Pokemons Data
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  //Get Speises Value Data
  getSpeisesData(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
}
