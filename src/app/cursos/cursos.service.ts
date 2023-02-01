import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

//O decorator que nos ajudar a injetar essa classe é o abaixo, declarando a classe com injetável.
@Injectable()
export class CursosService{

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Javascript', 'React', 'Angular', 'HTML']

  constructor(private logService: LogService){
    console.log('CursosService');
  }

  getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos;
  };

  addCurso(curso: string){
    this.logService.consoleLog(`Criando um novo curso ${curso}`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
};
