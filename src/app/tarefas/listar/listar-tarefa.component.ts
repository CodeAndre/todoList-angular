import { TarefasService } from './../shared/tarefas.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefasService: TarefasService) { } //Chamei os serviços do Tarefa Service

  ngOnInit(): void {
    this.tarefas = this.listarTodos(); //ao iniciar vai me da uma lista vazia
  }

  listarTodos(): Tarefa[] {
    return this.tarefasService.listarTodos();
  }
}
