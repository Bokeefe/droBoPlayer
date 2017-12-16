import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { PlaylistService } from '../shared/playlist.service';
import 'rxjs/Rx';
import { AllSongs } from '../../assets/dummy';
import { AudioComponent } from '../controls/controls.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [ PlaylistService ]
})

export class PlaylistComponent implements OnInit {
  public songs : any;

    constructor(public playlist:PlaylistService){}


    ngOnInit() {
    console.dir(this.songs);
    this.songs = this.playlist.songs;
    }


  }




