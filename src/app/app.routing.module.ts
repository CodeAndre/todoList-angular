import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TarefaRoutes } from "./tarefas/tarefas-routing.module";

export const routes: Routes = [ //um array de rotas para toda a minha aplicação
    {
        path: '', //incializa ja com as tarefas na tel principal
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes //concatena com o Array Routes
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],//forRoot é para privar as rotas só para essa funcionalidade
    exports: [RouterModule]
})

export class AppRoutingModule {}
