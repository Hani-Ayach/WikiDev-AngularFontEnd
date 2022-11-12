import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentedSectionEditComponent } from './commented-section-edit.component';

describe('CommentedSectionEditComponent', () => {
  let component: CommentedSectionEditComponent;
  let fixture: ComponentFixture<CommentedSectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentedSectionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentedSectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
