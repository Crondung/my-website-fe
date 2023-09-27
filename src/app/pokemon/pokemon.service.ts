import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.interface';
import { POKEMON_API_URL } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly http: HttpClient) {}

  getPokemonByIndex(index: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${POKEMON_API_URL}/pokemon/${index}`);
  }
}
