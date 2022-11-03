import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySectionsComponent } from './my-sections.component';

describe('MySectionsComponent', () => {
  let component: MySectionsComponent;
  let fixture: ComponentFixture<MySectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
