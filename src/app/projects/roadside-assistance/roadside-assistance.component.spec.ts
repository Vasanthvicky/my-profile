import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsideAssistanceComponent } from './roadside-assistance.component';

describe('RoadsideAssistanceComponent', () => {
  let component: RoadsideAssistanceComponent;
  let fixture: ComponentFixture<RoadsideAssistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadsideAssistanceComponent]
    });
    fixture = TestBed.createComponent(RoadsideAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
