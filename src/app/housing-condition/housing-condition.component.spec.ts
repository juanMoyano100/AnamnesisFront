import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingConditionComponent } from './housing-condition.component';

describe('HousingConditionComponent', () => {
  let component: HousingConditionComponent;
  let fixture: ComponentFixture<HousingConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
