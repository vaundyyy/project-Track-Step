import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuscaPassagens } from './form-busca-passagens';
import {MatFormFieldModule} from '@angular/material/form-field';

describe('FormBuscaPassagens', () => {
  let component: FormBuscaPassagens;
  let fixture: ComponentFixture<FormBuscaPassagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormBuscaPassagens,
        MatFormFieldModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBuscaPassagens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
