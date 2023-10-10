import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceManagementSystemComponent } from './finance-management-system.component';

describe('FinanceManagementSystemComponent', () => {
  let component: FinanceManagementSystemComponent;
  let fixture: ComponentFixture<FinanceManagementSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceManagementSystemComponent]
    });
    fixture = TestBed.createComponent(FinanceManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
