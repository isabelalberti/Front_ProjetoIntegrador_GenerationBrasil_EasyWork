import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarInternalComponent } from './nav-bar-internal.component';

describe('NavBarInternalComponent', () => {
  let component: NavBarInternalComponent;
  let fixture: ComponentFixture<NavBarInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
