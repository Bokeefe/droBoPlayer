import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AudioComponent } from './controls/controls.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FooterComponent } from './footer/footer.component';
import { PlaylistService } from './shared/playlist.service';
import { HeaderComponent } from './header/header.component';
import { AudioPlayerService } from './shared/audio-player.service';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    PlaylistComponent,
    HeaderComponent,
    FooterComponent  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ PlaylistService, AudioPlayerService, AudioComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
