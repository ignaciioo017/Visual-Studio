import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCestaComponent } from './formulario-cesta.component';

describe('FormularioCestaComponent', () => {
  let component: FormularioCestaComponent;
  let fixture: ComponentFixture<FormularioCestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioCestaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
