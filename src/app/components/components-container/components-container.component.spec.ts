import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsContainerComponent } from './components-container.component';

describe('ComponentsContainerComponent', () => {
  let component: ComponentsContainerComponent;
  let fixture: ComponentFixture<ComponentsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsContainerComponent]
    });
    fixture = TestBed.createComponent(ComponentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
