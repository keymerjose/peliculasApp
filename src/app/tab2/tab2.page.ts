import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar:string;
  ideas: string[] = ['Spiderman', 'Avengers', 'El señor de los anillos', 'La vida es bella'];
  peliculas: Pelicula[] = [];
  buscando = false;


  constructor(private movieService: MoviesService, private modalCtrl: ModalController) {}

  buscar(event){
    this.buscando = true;
    const valor:string = event.detail.value;
    if(valor.length === 0){
      this.buscando = false;
      this.peliculas = [];
      return;
    }
    this.movieService.buscarPeliculas(valor).subscribe(
      resp => {
        this.peliculas = resp.results;
        this.buscando = false;
      },
      err => {
        console.log(err);
      }
    )
  }

  async verDetalle(id:string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    })
    modal.present();
  }
}
