import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDateModalComponent } from './book-date-modal.component';

describe('BookDateModalComponent', () => {
  let component: BookDateModalComponent;
  let fixture: ComponentFixture<BookDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
