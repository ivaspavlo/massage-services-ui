import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderQuoteComponent } from './slider-quote.component';

describe('SliderQuoteComponent', () => {
  let component: SliderQuoteComponent;
  let fixture: ComponentFixture<SliderQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
