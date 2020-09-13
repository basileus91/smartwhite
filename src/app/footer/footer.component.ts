import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('email') input: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  subscribe(email: HTMLInputElement): void {
    console.log(email.value);
    this.input.nativeElement.value = '';
  }

}
