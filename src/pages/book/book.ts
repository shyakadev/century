import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
	responseData: any;
  data = JSON.parse(localStorage.getItem("userData"));
  bookData = {"account":"","seatno":"","uname":"","mid":"","time":""};
  movie: any;
  seats = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesProvider: MoviesProvider, private toastCtrl:ToastController) {
    
    console.log(this.data.userData.uname);
    this.movie = this.navParams.get("mid");
    console.log(this.movie);
    this.seat();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

    seat(){
   
    for(var i=0; i<256; i++){
      this.seats[i] = i+1;
      console.log(this.seats);
    }
  }

book() {
  this.bookData.uname=this.data.userData.uname;
  this.bookData.mid = this.movie;
  console.log(this.bookData.account+" username "+this.bookData.uname+this.bookData.seatno+"time");
 if(this.bookData.account && this.bookData.seatno){
    this.moviesProvider.postData(this.bookData, 'book').then((result) =>{
      this.responseData = result;
      if(this.responseData){
        console.log(this.responseData);
        this.presentToast("Thank U for booking with Us...");
      }
      else {
        this.presentToast("Please check your account or there isn't enough money");
      }
    })
  }
}

presentToast(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

}
