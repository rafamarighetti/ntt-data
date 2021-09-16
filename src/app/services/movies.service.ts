import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = environment.API_URL;
 
  constructor(private http: HttpClient) { }

  getMovies<T>(name: string, page: number): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.baseUrl}&s=${name}&page=${page}`);
  }
 
  getMovieById<T>(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}&i=${id}`);
  }
}
