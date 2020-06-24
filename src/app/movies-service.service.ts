import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  constructor(public _HttpClient: HttpClient) {}
  getTrendingMovies(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=6c730d87cf1ade2d5f6635b490612b94'
    );
  }
  getTrendingTvs(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/tv/week?api_key=6c730d87cf1ade2d5f6635b490612b94'
    );
  }
  ////////////////////////////////
  getmoviedetails(id): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6c730d87cf1ade2d5f6635b490612b94&language=en-US`
    );
  }
  gettvdetails(idtv): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/${idtv}?api_key=6c730d87cf1ade2d5f6635b490612b94&language=en-US`
    );
  }
}
