import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDevextremeComponent } from './learn-devextreme.component';

describe('LearnDevextremeComponent', () => {
  let component: LearnDevextremeComponent;
  let fixture: ComponentFixture<LearnDevextremeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnDevextremeComponent]
    });
    fixture = TestBed.createComponent(LearnDevextremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
