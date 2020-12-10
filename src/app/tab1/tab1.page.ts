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
  

  constructor(private MoviesService: MoviesService) {}

    ngOnInit(){
      this.MoviesService.getFeature().subscribe(
        resp => {
          console.log('Resp', resp);
          this.peliculasRecientes = resp.results;
        }
      );
    }
}
