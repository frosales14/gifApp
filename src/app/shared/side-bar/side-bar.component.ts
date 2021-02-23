import { Component, OnInit } from '@angular/core';

import { GifService } from 'src/app/gif/services/gif.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})

export class SideBarComponent {

  constructor( private gifService: GifService ) { }
  
  get historial(): string[]{
    return this.gifService.historial;
  }

}
