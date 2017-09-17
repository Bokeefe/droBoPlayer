import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
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
    songs = this.playlist.songs;
      constructor(public playlist:PlaylistService){
        console.log(this.playlist.songs);
      }


      ngOnInit() {

    }

  }




