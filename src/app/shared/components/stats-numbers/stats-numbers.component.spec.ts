import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsNumbersComponent } from './stats-numbers.component';

describe('StatsNumbersComponent', () => {
  let component: StatsNumbersComponent;
  let fixture: ComponentFixture<StatsNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsNumbersComponent]
    });
    fixture = TestBed.createComponent(StatsNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
