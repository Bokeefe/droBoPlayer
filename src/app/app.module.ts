import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AudioComponent } from './controls/controls.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FooterComponent } from './footer/footer.component';
import { PlaylistService } from './playlist.service';
@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    PlaylistComponent,
    FooterComponent  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
