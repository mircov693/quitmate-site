import {Component, Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {SupportComponent} from './support/support.component';
import {NavbarComponent} from './navbar/navbar.component';

export type NavbarTab = 'home' | 'privacy' | 'support'

@Injectable({providedIn: "root"})
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, PrivacyComponent, SupportComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quitmate-webpage';
  activeTab: NavbarTab = 'home'
}
