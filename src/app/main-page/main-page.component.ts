import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  showSlide: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  displayOtherSlide(): void {
    console.log(this.showSlide);
    if (this.showSlide >= 17) {
      this.showSlide = 0;
    } else {
      this.showSlide++;
    }
  }

}
