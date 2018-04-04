import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MoviesPage } from '../movies/movies';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
	responseData: any;
	userData = {"uname":"","pswd":""};
	
 constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider, private toastCtrl:ToastController) {
  	//this.getUser();
  }

login(){
	if(this.userData.uname && this.userData.pswd){
		this.loginProvider.postData(this.userData, "login").then((result) =>{
			this.responseData = result;
			console.log(this.responseData+this.userData.uname);
			if(this.responseData.userData){
				localStorage.setItem('userData',JSON.stringify(this.responseData))
				this.navCtrl.setRoot(MoviesPage);
			}
			else {
				this.presentToast("username or password might be wrong");
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
