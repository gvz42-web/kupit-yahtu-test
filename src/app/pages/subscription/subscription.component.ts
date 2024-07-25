import { Component } from '@angular/core';
import {DefaultLayoutComponent} from "../../layouts/default/default.component";
import {
  SubscriptionInfoComponent
} from "../../features/subscription/components/subscription-info/subscription-info.component";
import {
  PaymentMethodsComponent
} from "../../features/subscription/components/payment-methods/payment-methods.component";

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SubscriptionInfoComponent,
    PaymentMethodsComponent
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.sass'
})
export class SubscriptionComponent {

}
