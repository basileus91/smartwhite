import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string;

  constructor(
    private readonly router: Router,
    private modalService: NgbModal
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: <any>'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
