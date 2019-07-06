import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaClaseComponent } from './persona-clase.component';

describe('PersonaClaseComponent', () => {
  let component: PersonaClaseComponent;
  let fixture: ComponentFixture<PersonaClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
