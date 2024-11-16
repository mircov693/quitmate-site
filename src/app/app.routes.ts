import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {SupportComponent} from './support/support.component';

export const routes: Routes = [
  { path: 'privacy', title: 'Privacy', component: PrivacyComponent },
  { path: 'support', title: 'Support', component: SupportComponent },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: '**', title: 'Home', component: HomeComponent }
];
