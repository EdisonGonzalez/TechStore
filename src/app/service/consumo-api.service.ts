import { ModeloProductos } from './../interface/modelo-productos';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  // tslint:disable-next-line: object-literal-key-quotes
  headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private UrlServer = 'https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  /* GET products from the server */
  getProducts() {
    const urlRequest = this.UrlServer + '/mock/productos';
    return this.http.get<ModeloProductos[]>(urlRequest, httpOptions)
      .pipe(
        catchError(this.handleError('getProducts', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
