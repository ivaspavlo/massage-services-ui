import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardComponent } from './article-card.component';

describe('ArticleComponent', () => {
  let component: ArticleCardComponent;
  let fixture: ComponentFixture<ArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
