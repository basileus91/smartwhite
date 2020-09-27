import { Component, OnInit } from '@angular/core';
import { HeaderLocalizationService } from '../shared/hader-localization.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  showSlide: number = 0;

  constructor(
    private readonly headerLocalizationService: HeaderLocalizationService
  ) { }

  ngOnInit(): void {
    this.headerLocalizationService.blackHeader.next(true);
    
  }
  
  displayOtherSlide(): void {
    console.log(this.showSlide);
    if (this.showSlide >= 31) {
      this.showSlide = 0;
    } else {
      if (this.showSlide >= 11 && this.showSlide <= 21 || this.showSlide >= 30) {
        this.headerLocalizationService.blackHeader.next(false);
      } else {
        this.headerLocalizationService.blackHeader.next(true);
      }
      this.showSlide++;
    }
  }

}
