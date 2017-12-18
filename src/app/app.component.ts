import { Component } from '@angular/core';
import { PlaylistService } from './shared/playlist.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ PlaylistService ]
})
export class AppComponent {
  title = 'app';
  constructor(private _playlist:PlaylistService ){
              }
  
}
