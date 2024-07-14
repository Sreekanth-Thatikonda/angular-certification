import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails } from './movielist/movielist.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getMoviesList() {
    return this.http.get<MovieDetails[]>('/movies');
  }

  getMovieDetails(movieId: string) {
    return this.http.get<MovieDetails>(`/movies/${movieId}`);
  }
}
