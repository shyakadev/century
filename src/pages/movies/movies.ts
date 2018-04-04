import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { BookPage } from '../book/book';
/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
	movies: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesProvider: MoviesProvider) {
  	this.getMovies();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

  getMovies() {
  	this.moviesProvider.getMovies()
  	.then(data=>{
  		this.movies = data;
  		console.log(this.movies);
  	})
  }

  Book(mid){

    this.navCtrl.push(BookPage,{'mid':mid});
  }

}
