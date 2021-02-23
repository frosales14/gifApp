import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GifPageComponent, 
    BusquedaComponent, 
    ResultadoComponent
  ],
  exports: [
    GifPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifModule { }
