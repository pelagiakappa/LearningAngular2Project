import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // -->077 Adding Navigation with Event Binding and ngIf<--
  loadedFeature = 'recipe';

  // -->077 Adding Navigation with Event Binding and ngIf<--
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
