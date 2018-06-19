import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = '4d45ebac631954ab7281' ;
  private clientsecret = '7fd8a57ff44ac2ac8085218b2b5cabe89e75f64';

  constructor(private http:Http) {
    console.log('Ready service');
    this.username = 'Kaundu';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json()));
  }

  getProfileRepos(){
   return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" +this.clientsecret)
   .pipe(map(res =>res.json()));
 }
  updateProfile(username:string){
    this.username = username;

  }
}
