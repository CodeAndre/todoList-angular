import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefasService } from './shared/tarefas.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas.component';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TarefasService]
})
export class TarefasModule { }
