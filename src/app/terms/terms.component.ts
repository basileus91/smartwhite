import { Component, OnInit } from '@angular/core';
import { HeaderLocalizationService } from '../shared/hader-localization.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(
    private readonly headerLocalizationService: HeaderLocalizationService
  ) { }

  ngOnInit(): void {
    this.headerLocalizationService.blackHeader.next(false);
  }

}
