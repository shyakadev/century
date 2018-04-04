import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

    getApi = 'http://localhost:8888/apis2/';
	/*getApi = '192.168.43.1/apis2/';*/
	result:any;

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');

  }


  postData(credentials, type) {
  	return new Promise((resolve, reject)=>{
  		let headers = new Headers();
  		this.http.post(this.getApi+type, credentials, {headers: headers}).subscribe(res =>{
  			resolve(res.json());
  			console.log(res.json()+'pass');
  		},(err) =>{
  			console.log(err+'exa');
  			  		});
  	});
  }


}
