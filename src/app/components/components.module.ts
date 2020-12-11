import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';



@NgModule({
  declarations: [
    SlidesshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent
  ],
  exports: [
    SlidesshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
