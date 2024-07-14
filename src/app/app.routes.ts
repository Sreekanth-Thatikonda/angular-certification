import { Routes } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovielistComponent } from './movielist/movielist.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movieList',
    pathMatch: 'full'
  },
  {
    path: 'movieList',
    component: MovielistComponent,
  },
  {
    path: 'movieDetails/:id',
    component: MoviedetailsComponent,
  },
];
