import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // -->077 Adding Navigation with Event Binding and ngIf<--
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  // -->077 Adding Navigation with Event Binding and ngIf<--
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
