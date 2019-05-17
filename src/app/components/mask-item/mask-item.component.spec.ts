import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskItemComponent } from './mask-item.component';

describe('MaskItemComponent', () => {
  let component: MaskItemComponent;
  let fixture: ComponentFixture<MaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
