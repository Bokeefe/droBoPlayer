import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class PlaylistService {
 constructor(private http:Http) { 
        this.http = http

  }
    getSongs () {

    return this.http.get("../assets/dummy.json")
    .map(res =>  res.json())

  }
}