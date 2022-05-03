import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-modal-cargos',
  templateUrl: './modal-cargos.component.html',
  styleUrls: ['./modal-cargos.component.css']
})
export class ModalCargosComponent implements OnInit {
  allChecked = false;
  indeterminate = true;
  checkOptionsOne = [
    { label: 'Costo por Energia', value: 'costo', checked: true }, 
    { label: 'Demanda', value: 'demanda', checked: false },
    { label: 'Cargo reactivo', value: 'reactivo', checked: false },
    { label: 'Cargos por costo operativo de energia solar fotovoltaica', value: 'costoEnergia', checked: false },
    { label: 'Cargos por costo operativo (mantenimiento/administracion)', value: 'costoMantenimiento', checked: false },
    { label: 'Cargos por perdidas distribucion:', value: 'distribucion', checked: false },
    { label: 'Cargo por transformacion', value: 'transformacion', checked: false },
    { label: 'Cargo iluminacion comunitaria', value: 'iluminacion', checked: false },
    { label: 'Cargo servicios comunitarios', value: 'servicios', checked: false },
    { label: 'Cargo de comercializacion', value: 'comercializacion', checked: false },
    { label: 'Rectificacion/Ajuste', value: 'rectifA', checked: false },
    { label: 'Cargo por corte', value: 'corte', checked: false },
    { label: 'Recargo por mora', value: 'mora', checked: false },
    { label: 'Otros conceptos', value: 'otros', checked: false },
  ];

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne = this.checkOptionsOne.map(item => ({
        ...item,
        checked: true
      }));
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => ({
        ...item,
        checked: false
      }));
    }
  }

  updateSingleChecked(): void {
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  //FinCheck

  isVisible = false;
  validateForm !: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
  }
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  CleanForm(){
    this.validateForm  = this.fb.group({
       cargos: ['', [Validators.required]]
    });
  }

  listOfColumn = [
    {
      title: 'Seleccionar Cargos',
      compare: null,
      priority: false
    }
    
  ];
  
}
