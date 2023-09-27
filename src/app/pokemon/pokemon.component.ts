import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Pokemon } from './pokemon.interface';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit, OnChanges {
  @Input() visits = 0;
  pokemon?: Pokemon;

  constructor(private readonly service: PokemonService) {}

  ngOnInit(): void {
    this.initPokemon();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visits'].currentValue > 1) {
      this.pokemon = undefined;
      this.initPokemon();
    }
  }

  private getRandomPokedexNumber(min: number = 1, max: number = 151): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private initPokemon() {
    const pokemonIndex = this.getRandomPokedexNumber().toString();
    this.service
      .getPokemonByIndex(pokemonIndex)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }
}
