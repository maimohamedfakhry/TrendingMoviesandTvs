import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  id: any;
  moviedetails: any;
  topmoviestrending: any[] = [];
  isloading: boolean = true;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _MoviesServiceService: MoviesServiceService
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('y');
    _MoviesServiceService.getmoviedetails(this.id).subscribe(
      (data) => {
        this.moviedetails = data;
        this.isloading = false;
      },
      (errror) => {
        console.log(errror);
      }
    );
    /*
    _MoviesServiceService.getTrendingMovies().subscribe((topmovies) => {
      for (let i = 0; i < 10; i++) {
        this.topmoviestrending.push(topmovies.results[i]);
      }
    });
    */
  }

  ngOnInit(): void {}
}
