import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoFormComponent } from './contacto-form.component';

describe('ContactoFormComponent', () => {
  let component: ContactoFormComponent;
  let fixture: ComponentFixture<ContactoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoFormComponent]
    });
    fixture = TestBed.createComponent(ContactoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
