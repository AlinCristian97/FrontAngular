import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTooltipsComponent } from './learn-tooltips.component';

describe('LearnTooltipsComponent', () => {
  let component: LearnTooltipsComponent;
  let fixture: ComponentFixture<LearnTooltipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnTooltipsComponent]
    });
    fixture = TestBed.createComponent(LearnTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
