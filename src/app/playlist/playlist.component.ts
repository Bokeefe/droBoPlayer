import { Component, OnInit } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { PlaylistService } from '../playlist.service';
import 'rxjs/Rx';
const songs = "loading...";
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  constructor(private playlist:PlaylistService) { 
    console.log(this.playlist.getSongs());
  
  }
  ngOnInit() {
  }

}
