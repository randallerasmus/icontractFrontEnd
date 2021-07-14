import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractUploadsComponent } from './contract-uploads.component';

describe('ContractUploadsComponent', () => {
  let component: ContractUploadsComponent;
  let fixture: ComponentFixture<ContractUploadsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
