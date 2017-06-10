import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclegraphComponent } from './circlegraph.component';

describe('CirclegraphComponent', () => {
  let component: CirclegraphComponent;
  let fixture: ComponentFixture<CirclegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
