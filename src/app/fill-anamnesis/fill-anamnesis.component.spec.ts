import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAnamnesisComponent } from './fill-anamnesis.component';

describe('FillAnamnesisComponent', () => {
  let component: FillAnamnesisComponent;
  let fixture: ComponentFixture<FillAnamnesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillAnamnesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillAnamnesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
