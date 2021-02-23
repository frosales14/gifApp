import { Component } from '@angular/core';

import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {

  get resultados() {
    return this.gifService.resultados;
  }

  constructor( private gifService: GifService ) { }


}
