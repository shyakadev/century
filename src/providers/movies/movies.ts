import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
	getApi = 'http://localhost:8888/apis2/';
  /*getApi = '192.168.43.1/apis2/movies';*/


  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  getMovies() {
  	return new Promise(resolve=>{
  		this.http.get(this.getApi+'movies').subscribe(data =>{
  			resolve(data);
  		},err =>{
  			console.log(err);
  		})
  	})
  }

  getMovie(id) {
    console.log(id+"wo"+this.getApi+'movie?mid='+id);
    return new Promise(resolve=>{
      this.http.get(this.getApi+'movie?mid='+id).subscribe(data =>{
        resolve(data);
        console.log(data+'t');
      },err =>{
        console.log(err);
      })
    })
  }


}
