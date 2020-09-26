import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingChartComponent } from './sizing-chart.component';

describe('SizingChartComponent', () => {
  let component: SizingChartComponent;
  let fixture: ComponentFixture<SizingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
