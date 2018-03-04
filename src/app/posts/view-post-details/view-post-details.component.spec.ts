import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostDetailsComponent } from './view-post-details.component';

describe('ViewPostDetailsComponent', () => {
  let component: ViewPostDetailsComponent;
  let fixture: ComponentFixture<ViewPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
