import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonMenuComponent } from './components/pokemon-menu/pokemon-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(){}
  title = 'poke-web-app';
}
