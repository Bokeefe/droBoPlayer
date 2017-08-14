import { Component, OnInit } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { PlaylistService } from '../playlist.service';
import 'rxjs/Rx';
let songs = ["loading..."];
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  songs = songs;
  constructor(private playlist:PlaylistService) {
   this.playlist.getSongs().subscribe(
        (data) => {
        songs = data;
        },
        (err) =>  console.log("Error Loging In:",err)
      );

  
  }
  hello(){
    return JSON.stringify(songs[0]);

  }
  ngOnInit() {
  }

}
