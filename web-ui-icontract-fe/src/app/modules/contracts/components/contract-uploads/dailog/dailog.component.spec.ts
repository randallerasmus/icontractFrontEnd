import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailogComponent } from './dailog.component';

describe('DailogComponent', () => {
  let component: DailogComponent;
  let fixture: ComponentFixture<DailogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
