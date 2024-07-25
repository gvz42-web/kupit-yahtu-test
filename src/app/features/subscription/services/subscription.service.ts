import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {ISubscription} from "../../../entities/subscription.interface";
import {IPaymentMethod} from "../../../entities/payment-method.interface";
import {ITransaction} from "../../../entities/transaction.interface";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private readonly mockSubscription: ISubscription = {
    isActive: true,
    price: 10,
    nextCharge: new Date('2025-05-10'),
  }

  private readonly mockPaymentMethods: IPaymentMethod[] = [
    {
      cardNumber: '**** 4576',
    },
    {
      cardNumber: '**** 1234',
    },
  ]

  getSubscriptionInfo() {
    return of(this.mockSubscription);
  }

  getPaymentMethods() {
    return of(this.mockPaymentMethods);
  }
}
