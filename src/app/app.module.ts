import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserPrebootModule } from 'preboot/browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng4-universal-template'}),
    BrowserPrebootModule.replayEvents()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
