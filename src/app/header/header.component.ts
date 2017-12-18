// angular
import {Component, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnInit} from '@angular/core';

// services
import { PlaylistService } from  '../shared/playlist.service';
import { AudioPlayerService } from '../shared/audio-player.service';
// libraries
import $ from 'jquery/dist/jquery';
import { PlaylistComponent } from '../playlist/playlist.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [  ]
  })
  
  export class HeaderComponent implements OnInit {
    constructor(private _playlist:PlaylistComponent){
      
    }
    ngOnInit(){}

    backTrack(i){

    }
    playPause(){
      console.log();

    }
    random(){

    }
    nextTrack(i){

    }
    getPlayBackSpeed(){

    }
  }