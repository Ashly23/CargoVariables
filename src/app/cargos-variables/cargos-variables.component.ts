import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargos-variables',
  templateUrl: './cargos-variables.component.html',
  styleUrls: ['./cargos-variables.component.css']
})
export class CargosVariablesComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
