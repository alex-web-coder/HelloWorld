import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '63094f11';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    const url = `${this.apiUrl}?s=${title}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }


}
