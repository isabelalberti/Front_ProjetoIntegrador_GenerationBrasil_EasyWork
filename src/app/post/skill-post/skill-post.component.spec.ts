import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPostComponent } from './skill-post.component';

describe('SkillPostComponent', () => {
  let component: SkillPostComponent;
  let fixture: ComponentFixture<SkillPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
