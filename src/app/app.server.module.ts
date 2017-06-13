import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { ServerPrebootModule } from 'preboot/server';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    ServerPrebootModule.recordEvents({ appRoot: 'app-root' })
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
