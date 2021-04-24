import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBrandingComponent } from './desktop-branding.component';

describe('DesktopBrandingComponent', () => {
  let component: DesktopBrandingComponent;
  let fixture: ComponentFixture<DesktopBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopBrandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
