// angular
import { Component, OnInit, ViewChild } from '@angular/core';
import {Http, HttpModule} from '@angular/http';

// services
import { PlaylistService } from '../shared/playlist.service';
import { PlayerSevice } from '../shared/player.service';

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

    constructor(public _playlist:PlaylistService,
                public _player:PlayerSevice){}


    ngOnInit() {
      this.songs = this._playlist.songs;
    }
    newSong(i){
      

    }

  }




