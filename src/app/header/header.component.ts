import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Response} from '@angular/http';

import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // -->077 Adding Navigation with Event Binding and ngIf<--
  @Output() featureSelected = new EventEmitter<string>();

  // -->243 Sending PUT Requests to Save Data<--
  // -->255 Checking and Using Authentication Status<--
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) {
  }

  ngOnInit() {
  }

  // -->077 Adding Navigation with Event Binding and ngIf<--
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  // -->243 Sending PUT Requests to Save Data<--
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response); // Response {_body: "[{"description":"A super-tasty Schnitzel - just aw…ount":1,"name":"Meat"}],…}
        }
      );
  }

  // -->244 GETting Back the Recipes<--
  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  // -->256 Adding a Logout Button<--
  onLogout() {
    this.authService.logout();
  }

}
