import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService, User } from '../shared/auth.service';
import { HeaderLocalizationService } from '../shared/hader-localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.component.scss']
})
export class HeaderComponent implements OnInit {
  closeResult: User;
  email: string;
  password: string;
  userForm: FormGroup;
  errorMessage: string;
  isLogin: boolean = true;
  isBlackHeader: boolean = false;
  isCollapsed: boolean = false;
  isNavbarCollapsed: boolean;

  constructor(
    private readonly modalService: NgbModal,
    private readonly authService: AuthenticationService,
    private readonly headerLocalization: HeaderLocalizationService
  ) {
    this.isNavbarCollapsed = true;
   }

  ngOnInit(): void {
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
  signOut(): void {
    this.authService.isLogged.next(false);
    this.authService.logout();
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
