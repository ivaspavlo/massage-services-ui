import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandServicesComponent } from './brand-services.component';

describe('BrandServicesComponent', () => {
  let component: BrandServicesComponent;
  let fixture: ComponentFixture<BrandServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
