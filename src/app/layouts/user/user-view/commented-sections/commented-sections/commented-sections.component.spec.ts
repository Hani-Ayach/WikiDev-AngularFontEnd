import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentedSectionsComponent } from './commented-sections.component';

describe('CommentedSectionsComponent', () => {
  let component: CommentedSectionsComponent;
  let fixture: ComponentFixture<CommentedSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentedSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentedSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
