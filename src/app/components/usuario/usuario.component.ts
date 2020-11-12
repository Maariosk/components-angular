import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor( private router:ActivatedRoute) { 
    this.router.parent.params.subscribe ( parametros => {
      console.log()
    });
  }

  ngOnInit(): void {
  }

}
