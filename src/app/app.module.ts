import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';

const firebaseConfig = {
  apiKey: 'AIzaSyBpqmT4SapPzUsay6zWMhdK7OQa2BYtpew',
  authDomain: 'statuspage-f1b41.firebaseapp.com',
  databaseURL: 'https://statuspage-f1b41.firebaseio.com',
  projectId: 'statuspage-f1b41',
  storageBucket: 'statuspage-f1b41.appspot.com',
  messagingSenderId: '170806994391',
  appId: '1:170806994391:web:60b20b5c35bf4e4d5fd792'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
