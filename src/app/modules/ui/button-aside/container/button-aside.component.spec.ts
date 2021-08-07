import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAsideComponent } from './button-aside.component';

describe('ButtonAsideComponent', () => {
  let component: ButtonAsideComponent;
  let fixture: ComponentFixture<ButtonAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
