import { Container, EnterExitLeft, EnterExitRight, FADE_UP  } from './animations/animations-constants';
import { Component, OnInit } from '@angular/core';
import { HeaderLocalizationService } from '../shared/hader-localization.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [Container, EnterExitLeft, EnterExitRight, FADE_UP]
  
})
export class MainPageComponent implements OnInit {
  showSlide: number = 0;
  showSlide2Pictures: boolean = false;
  showSlide2Text: boolean = false;

  constructor(
    private readonly headerLocalizationService: HeaderLocalizationService
  ) { }

  ngOnInit(): void {
    this.headerLocalizationService.blackHeader.next(true);
    
  }
  
  displayOtherSlide(): void {
    
    if (this.showSlide >= 27) {
      this.headerLocalizationService.blackHeader.next(true);
      this.showSlide = 0;
    } else {
      this.showSlide++;
      console.log(this.showSlide);
      if (this.showSlide >= 9 && this.showSlide <= 19 || this.showSlide === 27) {
        this.headerLocalizationService.blackHeader.next(false);
      } else {
        this.headerLocalizationService.blackHeader.next(true);
      }
      if (this.showSlide === 1) {
        setInterval(()=> {
          this.showSlide2Pictures = true;;
        },300);
        setInterval(()=> {
          this.showSlide2Text = true;;
        },1100);
      }
      
      
    }
  }

}
