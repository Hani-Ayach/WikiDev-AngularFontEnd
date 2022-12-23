import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFullViewComponent } from './user-full-view.component';

describe('UserFullViewComponent', () => {
  let component: UserFullViewComponent;
  let fixture: ComponentFixture<UserFullViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFullViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
