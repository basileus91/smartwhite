import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackHeaderComponent } from './black-header.component';

describe('BlackHeaderComponent', () => {
  let component: BlackHeaderComponent;
  let fixture: ComponentFixture<BlackHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
