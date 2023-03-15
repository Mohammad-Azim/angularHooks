import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObserServiceService {
  constructor(private http: HttpClient) {}

  getDataObs(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
