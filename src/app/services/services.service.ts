import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Information } from '../../Info';

@Injectable({
  providedIn: 'root'
})
export class ServiceServices {

  private apiUrl = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=10'

  constructor(private http: HttpClient) { }

  getData() : Observable<Information[]>{
    return this.http.get<Information[]>(this.apiUrl);
  }

}
