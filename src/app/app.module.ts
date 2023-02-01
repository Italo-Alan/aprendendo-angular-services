import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from '../app/cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component'
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CursosService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
