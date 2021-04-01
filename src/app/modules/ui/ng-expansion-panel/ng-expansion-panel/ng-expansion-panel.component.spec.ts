import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgExpansionPanelComponent } from './ng-expansion-panel.component';

describe('NgExpansionPanelComponent', () => {
  let component: NgExpansionPanelComponent;
  let fixture: ComponentFixture<NgExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
