import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoAnimatedButtonComponent } from './goto-animated-button.component';

describe('GotoAnimatedButtonComponent', () => {
  let component: GotoAnimatedButtonComponent;
  let fixture: ComponentFixture<GotoAnimatedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotoAnimatedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoAnimatedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
