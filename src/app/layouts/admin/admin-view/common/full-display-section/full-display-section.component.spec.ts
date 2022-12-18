import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDisplaySectionComponent } from './full-display-section.component';

describe('FullDisplaySectionComponent', () => {
  let component: FullDisplaySectionComponent;
  let fixture: ComponentFixture<FullDisplaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullDisplaySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullDisplaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
