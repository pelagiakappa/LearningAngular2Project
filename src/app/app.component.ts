import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // -->077 Adding Navigation with Event Binding and ngIf<--
  loadedFeature = 'recipe';

  // -->250 Setting up the Firebase SDK<--
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAe8TfRO6lzNJkFCCz2ewgfIknA-I4VSxs',
      authDomain: 'ng-recipe-book-480bb.firebaseapp.com'
    });
  }

  // -->077 Adding Navigation with Event Binding and ngIf<--
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
