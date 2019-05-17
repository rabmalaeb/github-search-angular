import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitItemComponent } from './commit-item.component';

describe('CommitItemComponent', () => {
  let component: CommitItemComponent;
  let fixture: ComponentFixture<CommitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
