import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatsNumbersComponent } from './main-stats-numbers.component';

describe('MainStatsNumbersComponent', () => {
  let component: MainStatsNumbersComponent;
  let fixture: ComponentFixture<MainStatsNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainStatsNumbersComponent]
    });
    fixture = TestBed.createComponent(MainStatsNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
