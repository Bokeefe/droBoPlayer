import { Injectable } from '@angular/core';
import { AllSongs } from '../assets/dummy';

@Injectable()
export class PlaylistService {
  songs = AllSongs;
  constructor() { 
  
  
  }
  newSong(i){
    console.log(this.songs[i]);

  }
  
}