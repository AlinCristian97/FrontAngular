import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingStuffComponent } from './testing-stuff.component';

describe('TestingStuffComponent', () => {
  let component: TestingStuffComponent;
  let fixture: ComponentFixture<TestingStuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingStuffComponent]
    });
    fixture = TestBed.createComponent(TestingStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
