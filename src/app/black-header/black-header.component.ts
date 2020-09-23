import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../shared/auth.service';

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
  errorMessage: string;
  isLogin: boolean = true;

  constructor(
    private readonly modalService: NgbModal,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.authService.isLogged.subscribe(value => {
      this.isLogin = value;
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'md'}).result.then((result) => {
      this.closeResult = result;
    }, (reason) => {
      this.closeResult = reason;
    });
  }

  login(): void {
    const user = this.authService.login(this.userForm.get('email').value, this.userForm.get('password').value);
    console.log(user);
    if (user) {
      this.router.navigate(['/my-profile', 'vasile']);
      this.modalService.dismissAll();
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Bad credentials';
    }
  }

  signOut(): void {
    this.authService.isLogged.next(false);
    this.authService.logout();
  }
}
