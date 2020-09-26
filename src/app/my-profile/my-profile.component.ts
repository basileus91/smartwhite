import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderLocalizationService } from '../shared/hader-localization.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userForm: FormGroup;
  passwordForm: FormGroup;
  addressForm: FormGroup;
  personalDetails: boolean = true;
  changePassord: boolean = false;
  manageAddress: boolean = false;
  orderHistory: boolean = false;
  name: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private route: ActivatedRoute,
    private readonly headerLocalizationService: HeaderLocalizationService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]]
    });
    this.passwordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      currentPassword: ['', [Validators.required]],
    });
    this.addressForm = this.fb.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    });
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    this.headerLocalizationService.blackHeader.next(false);

  }

  display(tab: number){
    if (tab ===1) {
      this.personalDetails = true;
      this.changePassord = false;
      this.manageAddress = false;
      this.orderHistory = false;
    } else if (tab === 2) {
      this.personalDetails = false;
      this.changePassord = true;
      this.manageAddress = false;
      this.orderHistory = false;
    } else if (tab === 3) {
      this.personalDetails = false;
      this.changePassord = false;
      this.manageAddress = true;
      this.orderHistory = false;
    } else if (tab === 4) {
      this.personalDetails = false;
      this.changePassord = false;
      this.manageAddress = false;
      this.orderHistory = true;
    }

  }

}
