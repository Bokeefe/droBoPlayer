import { Injectable } from '@angular/core';
import { AllSongs } from '../../assets/dummy';
//import * as data from '../../assets/dummy.json';

@Injectable()
export class PlaylistService {
public songs :any;  
  constructor() { 
    this.songs = AllSongs;
  }
  
  
}