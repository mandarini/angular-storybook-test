import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibComponentComponent } from './test-lib-component.component';

describe('TestLibComponentComponent', () => {
  let component: TestLibComponentComponent;
  let fixture: ComponentFixture<TestLibComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLibComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
