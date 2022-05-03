import { Component, OnInit } from '@angular/core';

interface DataItem {
  id: number,
  fechaInicio: string,
  fechaFinal: string,
  valor: number
}

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfColumn = [
    {
      title: 'Id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 2
    },
    {
      title: 'Fecha Inicio',
      compare: null,
      priority: false
    },
    {
      title: 'Fecha Final',
      compare: null,
      priority: false
    },
    {
      title: 'Valor',
      compare: (a: DataItem, b: DataItem) => a.valor - b.valor,
      priority: 2
    },
    
  ];
  listOfData: DataItem[] = [
    {
     id: 123,
     fechaInicio: '2 de mayo',
     fechaFinal: '25 de junio',
     valor: 345
    },
  ];


}
