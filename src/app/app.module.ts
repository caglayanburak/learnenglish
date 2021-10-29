import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

 const firebaseConfig = {
  apiKey: "AIzaSyBS9jKlU3R3xQ18Xy0mvMieF5eB9WkvHEY",
  authDomain: "learnenglish-328d5.firebaseapp.com",
  projectId: "learnenglish-328d5",
  storageBucket: "learnenglish-328d5.appspot.com",
  messagingSenderId: "165070534385",
  appId: "1:165070534385:web:817495c35b20059e8b1b50",
  measurementId: "G-HP02JKKLQZ"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
