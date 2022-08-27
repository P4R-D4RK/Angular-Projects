import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { AuthResponse, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor( private http: HttpClient ) { }

  login( email: string, password: string ) {
    
    const url = `${ this.baseUrl }/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if( resp.ok ) {
            this._user = {
              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(false) )
      );
    }
}
