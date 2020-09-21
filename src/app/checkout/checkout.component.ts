import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../pre-order/pre-order.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order: Order;
  registerForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.order = window.history.state.data;
    console.log(this.order);
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required],
      zipcode: [false, Validators.required]
    });
  }

  onSubmit() {
  }

  removeQuantity(): void {
    if (this.order && this.order.quantity > 1) {
      this.order.quantity--;
    }
  }

  addQuantity(): void {
    if (this.order) {
      this.order.quantity++;
    }
  }

}
