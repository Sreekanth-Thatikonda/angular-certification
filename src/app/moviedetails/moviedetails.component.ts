import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MinutesPipe } from '../minutes.pipe';
import { MovieDetails } from '../movielist/movielist.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, MinutesPipe],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {
  movieDetails$! : Observable<MovieDetails>;
  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id') as string;
    this.getMovieDetails(heroId);
  }

  getMovieDetails(movieId: string) {
    this.movieDetails$ = this.appService.getMovieDetails(movieId)
  }

}
