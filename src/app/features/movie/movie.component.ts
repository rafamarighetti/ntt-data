import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie!: Movie;
  movieId = this.route.snapshot.paramMap.get("id") || ''; 
  favoriteIcon: string = localStorage.getItem('favoriteIcon') || 'bi-suit-heart';
  favoriteButton: string = localStorage.getItem('favoriteButton') || 'btn-secondary';
 
  changeFavorite() {
    this.favoriteIcon = this.favoriteIcon === 'bi-suit-heart' ? 'bi-suit-heart-fill' : 'bi-suit-heart';
    this.favoriteButton = this.favoriteButton === 'btn-secondary' ? 'btn-success' : 'btn-secondary' 
    localStorage.setItem('favoriteIcon', this.favoriteIcon)
    localStorage.setItem('favoriteButton', this.favoriteButton)
  }
 
  constructor(public route: ActivatedRoute, private moviesService: MoviesService) { 
    
  }
  ngOnInit() {
    this.moviesService.getMovieById(this.movieId).subscribe(res => this.movie = res)
  }
}
