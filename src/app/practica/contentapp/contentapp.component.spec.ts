import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentappComponent } from './contentapp.component';

describe('ContentappComponent', () => {
  let component: ContentappComponent;
  let fixture: ComponentFixture<ContentappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
