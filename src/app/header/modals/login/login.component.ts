import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService, User } from 'src/app/shared/auth.service';
import { HeaderLocalizationService } from 'src/app/shared/hader-localization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  closeResult: User;
  email: string;
  password: string;
  userForm: FormGroup;
  errorMessage: string;
  isLogin: boolean = true;
  isBlackHeader: boolean = false;

  constructor(
    private readonly modalService: NgbModal,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthenticationService,
    private readonly headerLocalization: HeaderLocalizationService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.authService.isLogged.subscribe(value => {
      this.isLogin = value;
    });
    this.headerLocalization.blackHeader.subscribe(header => {
      this.isBlackHeader = header;
    });
    this.authService.isLogged.subscribe(value => {
      console.log(value);
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
    this.authService.isLogged.next(true);
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
