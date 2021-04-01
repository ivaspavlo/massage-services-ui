import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopFooterMenuComponent } from './desktop-footer-menu.component';

describe('DesktopFooterMenuComponent', () => {
  let component: DesktopFooterMenuComponent;
  let fixture: ComponentFixture<DesktopFooterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopFooterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopFooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
