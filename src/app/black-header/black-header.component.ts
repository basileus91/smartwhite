import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export interface User {
  email: string;
  password: string;
}
@Component({
  selector: 'app-black-header',
  templateUrl: './black-header.component.html',
  styleUrls: ['./black-header.component.css']
})
export class BlackHeaderComponent implements OnInit {
  closeResult: User;
  email: string;
  password: string;
  userForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'md'}).result.then((result) => {
      this.closeResult = result;
    }, (reason) => {
      this.closeResult = reason;
    });
  }

  login(): void {
    this.router.navigate(['/my-profile', 'vasile']);
    this.modalService.dismissAll();
  }
}
