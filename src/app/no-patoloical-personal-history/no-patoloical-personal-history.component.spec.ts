import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPatoloicalPersonalHistoryComponent } from './no-patoloical-personal-history.component';

describe('NoPatoloicalPersonalHistoryComponent', () => {
  let component: NoPatoloicalPersonalHistoryComponent;
  let fixture: ComponentFixture<NoPatoloicalPersonalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPatoloicalPersonalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPatoloicalPersonalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
