import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPrototypingComponent } from './quick-prototyping.component';

describe('TestingStuffComponent', () => {
  let component: QuickPrototypingComponent;
  let fixture: ComponentFixture<QuickPrototypingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickPrototypingComponent]
    });
    fixture = TestBed.createComponent(QuickPrototypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
