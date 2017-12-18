// angular
import { Component, OnInit, ViewChild } from '@angular/core';
import {Http, HttpModule} from '@angular/http';

// services
import { PlaylistService } from '../shared/playlist.service';

import { AllSongs } from '../../assets/dummy';
import { AudioComponent } from '../controls/controls.component';
import { AudioPlayerService } from '../shared/audio-player.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [ PlaylistService ]
})

export class PlaylistComponent implements OnInit {
  public songs : any;

    constructor(public _playlist:PlaylistService,
                public _audio: AudioPlayerService){}


    ngOnInit() {
      this.songs = this._playlist.songs;
      console.log(this._audio.src);

        //    if (this.src.length) {
        //     this.list = this.src[this.startPosition];
        //     this.player.nativeElement.defaultPlaybackRate = .5;
           
        // }
    }
    newSong(i){
      

    }

  }




