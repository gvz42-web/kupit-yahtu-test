import { Routes } from '@angular/router';
import {SubscriptionComponent} from "./pages/subscription/subscription.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'subscription',
    pathMatch: 'full'
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  }
];
