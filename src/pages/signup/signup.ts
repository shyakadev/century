import { Component } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams, ToastController, } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	
	responseData:any;
	userData = {"uname":"","pswd":"","fname":"","lname":"","email":"","gender":"","telno":"","address":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loginProvider: LoginProvider, public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


signup() {
	if(this.userData.uname && this.userData.pswd){
		this.loginProvider.postData(this.userData, "signup").then((result) =>{
			this.responseData = result;
			if(this.responseData.success){
				console.log(this.responseData);
				//localStorage.setItem('userData', JSON.stringify(this.responseData));
				this.presentToast("Thank u for registering with us.");
				this.nav.setRoot(WelcomePage);			}
				else {
					this.presentToast("Please try valid Data");

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
