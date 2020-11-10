import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alerta: string = "alert-dark";
  loading:boolean = false;

   propiedades: object = {
    danger: false

  };

  constructor() { }

  ngOnInit(): void {
  }
  ejecutar(){
    this.loading = true;
    setTimeout (() => this.loading = false, 3000);
  }

}
