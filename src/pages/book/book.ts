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
  uname = this.data.uname;
  bookData = {"account":"","seats":""};



  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesProvider: MoviesProvider, private toastCtrl:ToastController) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

book() {
  if(this.bookData.account && this.bookData.seats){
    this.moviesProvider.postData(this.bookData, 'book').then((result) =>{
      this.responseData = result;
      if(this.responseData.success){
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
