import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}
  private getStandardOptions(): any {
    return {
      header: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
  }
  getWishes() {
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json',
      },
    });
    return this.http
      .get('/wishes1.json', options)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or the server');
    } else {
      console.error('server-side error', error.message);
    }
    return throwError(
      () => new Error('Cannot retrieve wishes from the server')
    );
  }
  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();
    options.header = options.header.set('Authorization', 'value-for-auth');
    this.http.post('/wishes.json', wish, options);
  }
}
