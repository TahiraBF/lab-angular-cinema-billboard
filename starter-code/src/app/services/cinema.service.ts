import { Injectable} from '@angular/core';
import moviesList from '../movies-list';

@Injectable ()
export class CinemaViewing {

  movies : Array<Object> = [{
  }];





  getMovies(): Array<Object>{
    this.movies = moviesList;
    this.movies.forEach((movie)=> {
      return movie;
    })
    return this.movies;
    }

  getMovie(id){
    let movieId = id;
    this.getMovies();
    this.movies.forEach((movie)=> {
      if (movie === movieId){
        console.log(movie);
        return movie;
      }
    })
  }
}
