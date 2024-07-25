import {Component, inject} from '@angular/core';
import {SubscriptionService} from "../../services/subscription.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {ButtonComponent} from "../../../../shared/ui/button/button.component";

@Component({
  selector: 'app-subscription-info',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    ButtonComponent
  ],
  templateUrl: './subscription-info.component.html',
  styleUrl: './subscription-info.component.sass'
})
export class SubscriptionInfoComponent {
  private subscriptionService = inject(SubscriptionService);

  subscription = toSignal(this.subscriptionService.getSubscriptionInfo())
}
