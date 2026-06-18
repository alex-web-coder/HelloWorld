import { Component } from '@angular/core';
import { MovieService } from '../../services/movies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-movies',
  imports: [FormsModule, CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {
  constructor(private movieService: MovieService, private cdr: ChangeDetectorRef) {}

  searchTitle: string = '';
  movies: any[] = [];
  errorMessage: string = '';


  search() {
    if (this.searchTitle.trim() === '') {
      return;
    }

    this.movieService.searchMovies(this.searchTitle).subscribe({
      next: (response) => {
        if (response.Search) {
          this.movies = response.Search;
          this.errorMessage = '';
        } else {
          this.movies = [];
          this.errorMessage = response.Error || 'No movies found.';
        }
        this.cdr.detectChanges(); // without this, the view won't update after fetching movies
      },
      error: () => {
        this.errorMessage = 'An error occurred while fetching movies.';
        this.movies = [];
        this.cdr.detectChanges();
      }
    });
  }


}
