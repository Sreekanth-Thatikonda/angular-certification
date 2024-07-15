import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MinutesPipe } from '../minutes.pipe';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface MovieDetails {
  release_date: string;
  id: string;
  title: string;
  duration: string;
  budget: string;
  box_office: string;
  poster: string;
  summary: string;
  cinematographers: string [];
  producers: string [];
}

export interface searchCriteria{
  title: string;
  year: number;
}

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MinutesPipe, FormsModule, ReactiveFormsModule],
  providers: [AppService],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  searchFromGroup: FormGroup;
  title = 'harry-potter-movies';
  movies: MovieDetails [] = [];
  tempMovies: MovieDetails [] = [];

  constructor(private appService: AppService, private fb: FormBuilder) {
    this.searchFromGroup = this.fb.group({ title: [''], year: [''] })
  }

  ngOnInit() {
    this.appService.getMoviesList().subscribe({
      next: (data: MovieDetails[]) => {
        this.movies = data;
        this.tempMovies = [...this.movies]
      },
      error: (err) => {},
    });

    this.searchFromGroup.valueChanges.subscribe({
      next: (data) => {
        this.filterMovies(data)
      }
    })

  }

  filterMovies(data: searchCriteria) {
    console.log(data)
    this.tempMovies = this.movies.filter((movie: MovieDetails) => {
     return ((data.title ?  movie.title.toLowerCase().includes(data.title.toLowerCase()): true)  && (data.year ? (Number(movie.release_date.substring(0,4)) === data.year) : true));
    })
  }

  trackMovieId(index: number, movie: MovieDetails ) {
    return movie.id;
  }
}
