import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppComponentComponent } from './test-app-component.component';

describe('TestAppComponentComponent', () => {
  let component: TestAppComponentComponent;
  let fixture: ComponentFixture<TestAppComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAppComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
