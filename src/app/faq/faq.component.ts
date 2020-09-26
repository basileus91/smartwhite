import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderLocalizationService } from '../shared/hader-localization.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  panelOpenState = false;

  constructor(
    private readonly headerLocalizationService: HeaderLocalizationService
  ) { }

  ngOnInit(): void {
    this.headerLocalizationService.blackHeader.next(false);
  }

}
