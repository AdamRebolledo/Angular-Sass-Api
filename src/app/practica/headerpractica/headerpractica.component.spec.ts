import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpracticaComponent } from './headerpractica.component';

describe('HeaderpracticaComponent', () => {
  let component: HeaderpracticaComponent;
  let fixture: ComponentFixture<HeaderpracticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpracticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
