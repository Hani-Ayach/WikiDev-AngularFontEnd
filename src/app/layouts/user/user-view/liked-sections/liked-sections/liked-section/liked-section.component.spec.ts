import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedSectionComponent } from './liked-section.component';

describe('LikedSectionComponent', () => {
  let component: LikedSectionComponent;
  let fixture: ComponentFixture<LikedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
