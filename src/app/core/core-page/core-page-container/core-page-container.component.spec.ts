import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePageContainerComponent } from './core-page-container.component';

describe('CorePageContainerComponent', () => {
  let component: CorePageContainerComponent;
  let fixture: ComponentFixture<CorePageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorePageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
