import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  private apiUrl2: string = "https://restcountries.com/v2";

  get httpParamsv31() {
    return new HttpParams()
    .set( 'fields', 'name,capital,cca2,flags,population' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParamsv31 } ).pipe(
      tap(console.log)
    );
  }

  buscarCapital( termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParamsv31 } );
  }

  getPaisPorCodigo( id: string): Observable<Country> {
    const url = `${ this.apiUrl2 }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string): Observable<Country[]> {
    
    const params = new HttpParams()
        .set( 'fields', 'name,capital,alpha2code,flags,population' );

    const url = `${ this.apiUrl2 }/regionalbloc/${ region }`;
    return this.http.get<Country[]>( url, { params } )
        .pipe(
          tap(console.log)
        );
  }

}


