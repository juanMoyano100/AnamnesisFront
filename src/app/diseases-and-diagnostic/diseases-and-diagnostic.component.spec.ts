import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesAndDiagnosticComponent } from './diseases-and-diagnostic.component';

describe('DiseasesAndDiagnosticComponent', () => {
  let component: DiseasesAndDiagnosticComponent;
  let fixture: ComponentFixture<DiseasesAndDiagnosticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasesAndDiagnosticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesAndDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
