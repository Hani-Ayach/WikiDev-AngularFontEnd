import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentedSectionComponent } from './commented-section.component';

describe('CommentedSectionComponent', () => {
  let component: CommentedSectionComponent;
  let fixture: ComponentFixture<CommentedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentedSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
