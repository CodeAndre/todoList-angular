import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./listar/listar-tarefa.component";
import { CadastrarTarefasComponent } from "./cadastrar/cadastrar-tarefas.component";


export const TarefaRoutes: Routes = [
    {
        path: 'tarefas', //vai redirecionar para o listar-tarefas.component.html para ser exebido em tela
        redirectTo: 'tarefas/listar'
    },

    {
        path: 'tarefas/listar', //mesma coisa aqui
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
    }
]