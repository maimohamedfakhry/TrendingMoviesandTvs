import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieTrending: [];
  tvTrending = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(_MoviesServiceService: MoviesServiceService) {
    _MoviesServiceService.getTrendingMovies().subscribe(
      (data) => {
        this.movieTrending = data.results;
      },
      (err) => {
        console.log(err);
      }
    );
    //////////////////////////////////////////
    _MoviesServiceService.getTrendingTvs().subscribe(
      (datatv) => {
        this.tvTrending = datatv.results;
      },
      (er) => {
        console.log(er);
      }
    );
  }

  ngOnInit(): void {}
}
