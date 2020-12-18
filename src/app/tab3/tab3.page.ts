import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  peliculas: PeliculaDetalle[] = [];
  generos: any[] = [];
  favoritoGenero: any[] = [];
  constructor(private datalocal: DataLocalService,
              private moviesservice: MoviesService) {}

  async ngOnInit(){
    
  }

  async ionViewWillEnter(){
    this.peliculas = await this.datalocal.cargarFavoritos();
    this.generos = await this.moviesservice.cargarGenero();
    this.pelisPorGenero(this.generos, this.peliculas);
  }

  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]){
    this.favoritoGenero = [];
    generos.forEach(genero => {
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(peli =>{
          return peli.genres.find(genre => genre.id === genero.id);
        })
      })
    });
    console.log(this.favoritoGenero);
  }

}
