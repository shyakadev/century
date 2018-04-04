import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
	movie: any;
	//id = JSON.parse(localStorage.getItem("mid"));
	id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesProvider: MoviesProvider) {
  this.id = this.navParams.get('mid');
  console.log(this.id);
  this.getMovie();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

getMovie() {
	this.moviesProvider.getMovie(this.id)
  	.then(data=>{
  		this.movie = data;
  		console.log(this.movie);
  	})
  }

}
