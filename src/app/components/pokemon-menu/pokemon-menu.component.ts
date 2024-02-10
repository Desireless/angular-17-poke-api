import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonListResult, traerPokemonResponse, } from '../../types/pokemon.types';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import * as mockListaPokemon from '../../mocks/lista.json';
import * as mockPokemon from '../../mocks/ditto.json';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pokemon-menu',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, InputNumberModule, CommonModule],
  templateUrl: './pokemon-menu.component.html',
  styleUrl: './pokemon-menu.component.scss',
  providers: []
})
export class PokemonMenuComponent {
  
  constructor(private service: PokemonService){}
  
  // Principal
  nombre: string = '';
  cantidad: number = 0;
  detallesPokemon!: traerPokemonResponse;
  listaPokemon!: PokemonListResult[];

  // Tabla
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;

  buscarPorNombre(): void {
    if(this.nombre === '') return;

    const body = { nombre: this.nombre };

    this.service.traerPokemon(body).subscribe(
      {
        next: (data) => {
          this.detallesPokemon = data;
          console.log(data);
        },
        error: (error) => {
          this.detallesPokemon = mockPokemon;
          console.error("Ha ocurrido un error",error);
        }
      }
    )
  }

  buscarPorCantidad(): void {
    if(this.cantidad === 0) return;

    const body = { cantidad: this.cantidad };

    this.service.traerListaPokemon(body).subscribe(
      {
        next: (data) => {
          this.listaPokemon = data.results;
          console.log(data);
        },
        error: (error) => {
          console.error("Ha ocurrido un error",error);
          this.listaPokemon = mockListaPokemon.results;
          this.totalPages = Math.ceil(this.listaPokemon.length / this.pageSize);
        }
      }
    );
  }

  onPageChange(event: any) {
    this.currentPage = event.currentPage;
  }
  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  getIdFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }

  getPokemonById(url: string): void {

    const id = this.getIdFromUrl(url);

    this.service.traerPokemonPorId(id).subscribe(
      {
        next: (data) => {
          this.detallesPokemon = data;
        },
        error: (error) => {
          this.detallesPokemon = mockPokemon;
          console.error("Ha ocurrido un error",error);
        }
      }
    )
  }

}
