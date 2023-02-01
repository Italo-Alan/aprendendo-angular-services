import { Component,OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  /* Essa é uma forma meio que errada, funciona, mas não é a melhor dela, a forma correta de ser usar services estará abaixo.

  Em uma aplicação nós normalmente não teremos dados estáticos, e sim teremos que buscar esses dados dentro do servidor, para isso teremos uma classe de serviços
  cursos: string[] = [];

  cursosService: CursosService;

  constructor(){
    this.cursosService = new CursosService();
  };

  Como boas práticas, é interessante que o método OnInit seja usado, pois é o método que é executado quando a classe for inicializada
  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  } */

  //Melhor forma de se usar o service.

  cursos: string[] = [];
  // cursosService: CursosService;

  constructor(private cursosService: CursosService){
    // this.cursosService = _cursosService;
  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();

    this.cursosService.emitirCursoCriado.subscribe(
      curso => console.log(curso)
    );
  }
}
