import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/models/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  category = 'All';
  page = 1;

  constructor(private moviesService: MoviesService) {
    moviesService.getMovies(this.category, this.page).subscribe((res) => {
      this.movies = (res as any).Search;
    });
  }

  searchCategory(term: string) {
    this.moviesService
      .getMovies(term, this.page)
      .subscribe((res) => (this.movies = (res as any).Search));
  }

  nextPage() {
    this.page = this.page + 1;
    this.moviesService
      .getMovies(this.category, this.page)
      .subscribe((res) => (this.movies = (res as any).Search));
  }

  previousPage() {
    this.page = this.page - 1;
    if (this.page >= 1) {
      this.moviesService
        .getMovies(this.category, this.page)
        .subscribe((res) => (this.movies = (res as any).Search));
    }
  }

  ngOnInit() {}
}
