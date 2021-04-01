import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSignatureComponent } from './brand-signature.component';

describe('BrandSignatureComponent', () => {
  let component: BrandSignatureComponent;
  let fixture: ComponentFixture<BrandSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
