import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemsComponent } from './dems.component';

describe('DemsComponent', () => {
  let component: DemsComponent;
  let fixture: ComponentFixture<DemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemsComponent]
    });
    fixture = TestBed.createComponent(DemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
