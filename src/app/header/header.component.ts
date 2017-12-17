// angular
import {Component, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnInit} from '@angular/core';

// services
import { PlaylistService } from  '../shared/playlist.service';
import { PlayerService } from '../shared/player.service';
// libraries
import $ from 'jquery/dist/jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [  ]
  })
  
  export class HeaderComponent implements OnInit {
      
    ngOnInit(){}

    backTrack(i){

    }
    playPause(i){

    }
    random(){

    }
    nextTrack(i){

    }
    getPlayBackSpeed(){

    }
  }