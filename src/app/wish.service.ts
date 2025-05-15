import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}
  getWisher() {
    return this.http.get('/wishes.json');
  }
}
