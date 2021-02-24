import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFSearchResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _apiKey    : string   = 'TdPE5Z2m2vTKFN38XjwXHb6I2kunGNsu';
  private _historial : string[] = [];
  private _serviceUrl: string   = 'https://api.giphy.com/v1/gifs';
  
  public resultados  : Gif[]    = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {

    this._historial = JSON.parse(localStorage.getItem( 'Historial' ) !) || [];
    this.resultados = JSON.parse(localStorage.getItem( 'Resultado' ) !) || [];
  }

  buscarGif( elemento: string ) {
    
    elemento = elemento.trim().toLocaleLowerCase();

    if(elemento){
      if(!this._historial.includes(elemento)){
        this._historial.unshift(elemento);
        this._historial.splice(10);

        localStorage.setItem( 'Historial' ,JSON.stringify(this._historial) );
      }
    }

    const params = new HttpParams()
          .set('api_key', this._apiKey)
          .set('q', elemento)
          .set('limit', '10')

    this.http.get<GIFSearchResponse>(`${this._serviceUrl}/search`, {params})
      .subscribe( ( resp ) => {
        this.resultados = resp.data;
        localStorage.setItem('Resultado', JSON.stringify(this.resultados) );
      });
  }
}
