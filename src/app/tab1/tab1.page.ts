import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RespuestaMDB, Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  peliculasRecientes: Pelicula[] = [];
  populares:Pelicula[] = [];

  constructor(private MoviesService: MoviesService) {}

    ngOnInit(){
      this.MoviesService.getFeature().subscribe(
        resp => {
          console.log('Resp', resp);
          this.peliculasRecientes = resp.results;
        }
      );

      this.getPopulares();
    }

    cargarMas(){
      this.getPopulares();
    }


    getPopulares(){
      this.MoviesService.getPopulares().subscribe(
        resp => {
          const arrTemp = [...this.populares, ...resp.results];
          this.populares = arrTemp;
        }
      );
    }
}
