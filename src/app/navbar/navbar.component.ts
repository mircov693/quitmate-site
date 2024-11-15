import { Component } from '@angular/core';
import {AppComponent, NavbarTab} from '../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  hoveredTab: NavbarTab | 'none' = 'none'

  constructor(private appComponent: AppComponent) {}

  setActiveTab(tab: NavbarTab) {
    this.appComponent.activeTab = tab
  }

  isSelected(tab: NavbarTab) {
    if (this.appComponent.activeTab === tab) {
      return "selected"
    } else {
      return ""
    }
  }

  isHovered(tab: NavbarTab) {
    if (this.hoveredTab === tab && this.appComponent.activeTab !== tab) {
      return "hovered"
    } else {
      return ""
    }
  }

  hover(tab: NavbarTab) {
    this.hoveredTab = tab
  }

  unhover() {
    this.hoveredTab = 'none'
  }
}
