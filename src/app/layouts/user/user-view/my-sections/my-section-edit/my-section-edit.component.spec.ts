import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySectionEditComponent } from './my-section-edit.component';

describe('SectionEditComponent', () => {
  let component: MySectionEditComponent;
  let fixture: ComponentFixture<MySectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySectionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
