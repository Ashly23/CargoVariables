import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosVariablesComponent } from './cargos-variables.component';

describe('CargosVariablesComponent', () => {
  let component: CargosVariablesComponent;
  let fixture: ComponentFixture<CargosVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
