import { Component, OnInit } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { PlaylistService } from '../playlist.service';
import 'rxjs/Rx';
import { AllSongs } from '../../assets/dummy';
import { AudioComponent } from '../controls/controls.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
      songs = AllSongs;
      constructor(public audio:AudioComponent){
        console.log(this.audio);
      }
      ngOnInit() {
    }
      newSong(i){
        
        console.log(this.songs[i].srcpath);
      }
  }




