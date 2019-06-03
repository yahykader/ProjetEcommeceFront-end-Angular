import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatComponent } from './admin-cat.component';

describe('AdminCatComponent', () => {
  let component: AdminCatComponent;
  let fixture: ComponentFixture<AdminCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
