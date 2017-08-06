import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
  
const songs = ['song1','song2','song3'];

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
   songs = songs;

  constructor() { 
    console.log(this);
  }

  ngOnInit() {
  }

}
