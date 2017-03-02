import { Component, OnInit } from '@angular/core';
import { CinemaViewing} from '../services/cinema.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})


export class ShowMoviesComponent implements OnInit {

  movieEntry = [];

  constructor(public cinemaViewing : CinemaViewing) {

  }

  moviesListing : Array<Object> = this.cinemaViewing.getMovies()

  ngOnInit() {
    this.cinemaViewing = new CinemaViewing;
    this.displayMovies();
    this.moviesListing;
  }

  displayMovies(){
    this.cinemaViewing.getMovies()
    this.cinemaViewing.movies.forEach((movie)=>{
      this.movieEntry.push(movie);
      console.log("display: ", this.movieEntry);

    })

  }

}
