import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnamesisComponent } from './list-anamesis.component';

describe('ListAnamesisComponent', () => {
  let component: ListAnamesisComponent;
  let fixture: ComponentFixture<ListAnamesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnamesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnamesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
