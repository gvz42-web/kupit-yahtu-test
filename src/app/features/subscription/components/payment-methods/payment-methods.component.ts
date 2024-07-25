import {Component, inject} from '@angular/core';
import {SubscriptionService} from "../../services/subscription.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {ButtonComponent} from "../../../../shared/ui/button/button.component";

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.sass'
})
export class PaymentMethodsComponent {
  private subscriptionService = inject(SubscriptionService);

  paymentMethods = toSignal(this.subscriptionService.getPaymentMethods(), {initialValue: []});
}
