import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { MoviesService, SearchType } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results!: Observable<any>;
  searchTerm: string = '';
  type!: SearchType.all;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  search() {
    console.log(this.searchTerm)
    this.results = 
    this.moviesService.searchMovies(this.searchTerm, this.type)
    .pipe(
      map(results => results['Search'])
    );
  }
}
