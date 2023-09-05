import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode',
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url = 'http://www.omdbapi.com/';
  private apiKey = '54ecd6a3';

  constructor(private http: HttpClient) {}

  searchMovies(title: string, type: SearchType): Observable<any> {
    return this.http.get(
      `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`
    );
  }

  searchDetails(id: any): Observable<any> {
    console.log(id)
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
