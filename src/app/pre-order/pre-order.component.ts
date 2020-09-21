import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

export interface Order {
  quantity: number,
  size: string
}

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.css']
})
export class PreOrderComponent implements OnInit {
  quantity: number = 1;
  size: string;
  order: Order;

  constructor(
    private readonly router: Router
   ) { }

  ngOnInit(): void {
    this.quantity = 1;
  }

  buy(): void { 
    this.order = <Order> {
      quantity: this.quantity,
      size: this.size
    }
    this.router.navigate(['checkout'], {state: {data: this.order}});
  }

  removeQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addQuantity(): void {
    this.quantity++;
  }

  selectedSize(size: string): void {
    this.size = size;
  }

}
