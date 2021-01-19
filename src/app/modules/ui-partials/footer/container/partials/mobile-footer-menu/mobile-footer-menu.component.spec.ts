import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFooterMenuComponent } from './mobile-footer-menu.component';

describe('MobileFooterMenuComponent', () => {
  let component: MobileFooterMenuComponent;
  let fixture: ComponentFixture<MobileFooterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileFooterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
