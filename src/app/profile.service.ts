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
}
