import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFSearchResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _apiKey   : string   = 'TdPE5Z2m2vTKFN38XjwXHb6I2kunGNsu';
  private _historial: string[] = [];

  public resultados  : Gif[]    = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {}

  buscarGif( elemento: string ) {
    
    elemento = elemento.trim().toLocaleLowerCase();

    if(elemento){
      if(!this._historial.includes(elemento)){
        this._historial.unshift(elemento);
        this._historial.splice(10);
      }
    }

    this.http.get<GIFSearchResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${ elemento }&limit=10`)
      .subscribe( ( resp ) => {
        console.log( resp.data );
        this.resultados = resp.data;
      });
  }
}
