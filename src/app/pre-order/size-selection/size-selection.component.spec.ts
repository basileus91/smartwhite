import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeSelectionComponent } from './size-selection.component';

describe('SizeSelectionComponent', () => {
  let component: SizeSelectionComponent;
  let fixture: ComponentFixture<SizeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
