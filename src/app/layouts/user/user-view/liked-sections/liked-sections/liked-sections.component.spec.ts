import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedSectionsComponent } from './liked-sections.component';

describe('LikedSectionsComponent', () => {
  let component: LikedSectionsComponent;
  let fixture: ComponentFixture<LikedSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
