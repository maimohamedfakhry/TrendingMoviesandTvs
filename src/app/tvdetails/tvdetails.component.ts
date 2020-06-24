import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css'],
})
export class TvdetailsComponent implements OnInit {
  id: any;
  tvdetails: any;
  isloadingg: boolean = true;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _MoviesServiceService: MoviesServiceService
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('x');
    _MoviesServiceService.gettvdetails(this.id).subscribe(
      (data) => {
        this.tvdetails = data;
        this.isloadingg = false;
      },
      (errror) => {
        console.log(errror);
      }
    );
  }

  ngOnInit(): void {}
}
