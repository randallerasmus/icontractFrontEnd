import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractApprovalComponent } from './contract-approval.component';

describe('ContractApprovalComponent', () => {
  let component: ContractApprovalComponent;
  let fixture: ComponentFixture<ContractApprovalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
