import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSingleItemComponent } from './carousel-single-item.component';

describe('CarouselSingleItemComponent', () => {
  let component: CarouselSingleItemComponent;
  let fixture: ComponentFixture<CarouselSingleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSingleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
