import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { traerListaPokemonBody, traerListaPokemonResponse, traerPokemonBody, traerPokemonResponse } from '../types/pokemon.types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'http://localhost:8080/pokemon/v1/';
  private pokeApiUrl = 'https://pokeapi.co/api/v2/'

  constructor(private http: HttpClient) { }

  traerListaPokemon(body: traerListaPokemonBody) : Observable<traerListaPokemonResponse>{
    const url = this.apiUrl + 'traerListaPokemon';
    return this.http.post<traerListaPokemonResponse>(url, body);
  }

  traerPokemon(body: traerPokemonBody) : Observable<traerPokemonResponse>{
    const url = this.apiUrl + 'traerPokemon';
    return this.http.post<traerPokemonResponse>(url, body);
  }

  traerPokemonPorId(id: number) : Observable<traerPokemonResponse>{
    const url = `${this.pokeApiUrl}pokemon/${id}/`;
    return this.http.get<traerPokemonResponse>(url);
  }
}
